module.exports.ENV_PRODUCTION = 'production'
module.exports.ENV_DEVELOPMENT = 'development'
module.exports.ENV_NONE = 'none'
module.exports.ASSETS_ROOT = 'public'
module.exports.STATIC_ROOT = 'static'

// production
module.exports.productionConfig = {
}

// development
module.exports.developmentConfig = {
  // 端口
  port: 8080,
  // 自动调整端口
  autoPort: true,
  // 自动开启浏览器
  autoOpenBrowser: true,
  // 启用eslint
  useEslint: true
}
