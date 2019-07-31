const createList = (method) => {
  return {
    [method + ' /api-mock/(.*)']: (req, res) => {
      const { method, params, query, body } = req
      res.send({
        status: 1,
        message: '',
        data: { method, params, query, body }
      })
    }
  }
}

module.exports = Object.assign({},
  createList('GET'),
  createList('POST'),
  createList('PUT'),
  createList('DELETE')
)
