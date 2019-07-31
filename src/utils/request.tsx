import axios, { AxiosRequestConfig } from 'axios'
import history from '@/history'

export const instance = axios.create({
  baseURL: BASE_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})

const dealError = (code?: number | string) => {
  // 根据请求状态值跳转到异常页面
  console.error('error code:', code)
  switch (Number(code)) {
    case 401:
      history.replace('/user/login')
      break
    default:
      return true
  }
}

function doRequest<T = AjaxResponse>(obj: AxiosRequestConfig = {}): Promise<T> {
  const params: AxiosRequestConfig = {
    ...obj
  }
  if (params.data instanceof FormData) {
    params.headers = {
      ...params.headers,
      'Content-Type': 'multiple/form-data; charset=UTF-8'
    }
  }
  return new Promise((resolve, reject) => {
    instance.request(params).then(res => {
      resolve(res.data)
    }).catch(err => {
      if (err && err.response) {
        if (dealError(err.response.status)) {
          reject(err.response.data)
        }
      } else {
        if (dealError()) {
          reject()
        }
      }
    })
  })
}

export default doRequest
