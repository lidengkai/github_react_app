const delay = require('mocker-api/lib/delay')
const all = require('./all')
const user = require('./route/user')

module.exports = delay(Object.assign(
  {
    _proxy: {
      priority: 'mocker',
      // 代理
      proxy: {
        '/api/(.*)': 'http://0.0.0.0:10138',
        '/api-mock/(.*)': 'http://0.0.0.0:10138'
      },
      pathRewrite: {
        '^/api': '/api',
        '^/api-mock': '/api'
      }
    }
  },
  user,
  all,
), 800)
