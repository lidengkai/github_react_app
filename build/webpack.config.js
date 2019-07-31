const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')

module.exports = {
  entry: {
    app: utils.rootPath('src/main.tsx')
  },
  output: {
    path: utils.rootPath('dist'),
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': utils.rootPath('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: utils.assetsPath('images'),
              name: '[name]-[hash:5].[ext]'
            }
          }
        ]
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: utils.assetsPath('medias'),
              name: '[name]-[hash:5].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      title: 'github_react_app',
      scriptLoading: 'blocking',
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    // eslint.globals需要添加设置的常量
    new webpack.ProvidePlugin({
      React: 'react',
      memo: ['react', 'memo'],
      useState: ['react', 'useState'],
      useMemo: ['react', 'useMemo'],
      useCallback: ['react', 'useCallback'],
      useEffect: ['react', 'useEffect'],
      useRef: ['react', 'useRef'],
      useContext: ['react', 'useContext'],
      useReducer: ['react', 'useReducer']
    }),
    // eslint.globals需要添加设置的常量
    new webpack.DefinePlugin({
      BASE_API: JSON.stringify('/api')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: utils.rootPath('static'),
          to: 'static',
          globOptions: {
            ignore: ['.*']
          }
        }
      ]
    })
  ],
  stats: {
    entrypoints: false,
    children: false
  },
  performance: {
    hints: false
  }
}