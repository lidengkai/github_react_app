const webpack = require('webpack')
const { merge } = require('webpack-merge')
const portfinder = require('portfinder')
const apiMocker = require('mocker-api')
const baseConfig = require('./webpack.config')
const utils = require('./utils')
const {
  ENV_DEVELOPMENT: mode,
  developmentConfig: config
} = require('./config')

const env = 'local'
console.log('当前环境:', mode, env)

module.exports = (
  config.autoPort
    ? portfinder.getPortPromise({
      port: config.port
    })
    : Promise.resolve(config.port)
).then(port => merge(baseConfig, {
  mode,
  devtool: 'eval-cheap-module-source-map',
  entry: {
    app: utils.rootPath('src/local/index.tsx')
  },
  output: {
    filename: utils.assetsPath('js/[name].js')
  },
  module: {
    rules: [
      ...utils.jsLoaders({ useEslint: true }),
      ...utils.cssLoaders()
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port,
    historyApiFallback: true,
    disableHostCheck: true,
    open: config.autoOpenBrowser,
    inline: true,
    hot: true,
    before: function (app) {
      apiMocker(app, utils.rootPath('mock'))
    }
  },
  target: 'web'
})).catch(err => {
  console.log(err)
})
