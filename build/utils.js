const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ASSETS_ROOT, STATIC_ROOT } = require('./config')

module.exports.rootPath = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports.assetsPath = (dir) => {
  return path.join(ASSETS_ROOT, dir)
}

module.exports.staticPath = (dir) => {
  return path.join(STATIC_ROOT, dir)
}

module.exports.jsLoaders = (options = {}) => {
  const { useEslint } = options
  return [
    {
      test: /\.(jsx?|tsx?)$/,
      use: [
        'babel-loader',
        ...(useEslint ? ['eslint-loader'] : [])
      ],
      include: /src/,
      exclude: /node_modules/
    }
  ]
}

module.exports.cssLoaders = (options = {}) => {
  const { useExtract } = options
  return [
    {
      test: /\.css$/,
      use: [
        useExtract ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        useExtract ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              exportLocalsConvention: 'camelCaseOnly'
            }
          }
        },
        'postcss-loader',
        'less-loader'
      ]
    }
  ]
}
