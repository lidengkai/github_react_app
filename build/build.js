const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config')
const utils = require('./utils')
const {
  ENV_PRODUCTION: mode,
  productionConfig: config
} = require('./config')

const isDev = process.env.npm_config_env_dev
const isTest = process.env.npm_config_env_test
const env = isDev ? 'dev' : isTest ? 'test' : 'prod'
console.log('当前环境:', mode, env)

module.exports = merge(baseConfig, {
  mode,
  // devtool: 'source-map',
  module: {
    rules: [
      ...utils.jsLoaders(),
      ...utils.cssLoaders({ useExtract: true })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode)
      },
      WEBPACK_MODE: JSON.stringify(mode),
      WEBPACK_ENV: JSON.stringify(env)
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[chunkhash].css')
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})