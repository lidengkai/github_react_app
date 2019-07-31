const info = require('../data/user/info.json')
const login = require('../data/user/login.json')
const logout = require('../data/user/logout.json')

module.exports = {
  'GET /api-mock/user/info': info,
  'POST /api-mock/user/login': login,
  'GET /api-mock/user/logout': logout
}
