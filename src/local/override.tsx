import { combineReducers } from 'redux'
import store, { reducers } from '@/store'
import * as list from './reducers'
import { instance } from '@/utils/request'
import * as formatter from '@/utils/formatter'

store.replaceReducer(
  combineReducers({
    ...reducers,
    ...list
  }) as any
)

instance.interceptors.request.use(function (config) {
  const type = sessionStorage.getItem('local-url-type')
  return {
    ...config,
    baseURL: type === 'mock' ? '/api-mock'
      : type === 'agency' ? '/api'
        : type === 'default' ? config.baseURL
          : '/api-mock'
  }
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  const { config } = response
  const { method, baseURL, url, data } = config
  console.log('%c%s', 'font-weight: 800;color: #3A5;', `[${method!.toLocaleUpperCase()}:]${baseURL! + url}`)
  console.log('%c%s%o', 'text-indent: 1em;font-weight: 600;', 'req:', formatter.stringToJson(data))
  console.log('%c%s%o', 'text-indent: 1em;font-weight: 600;', 'res:', response.data)
  return response
}, function (error) {
  return Promise.reject(error)
})
