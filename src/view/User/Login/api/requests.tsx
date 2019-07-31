import Message from '@/component/Message'
import request from '@/utils/request'
import { Login } from './utils'

export const login: Login.Fn = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data: Login.setRequest(data)
  }).then((res) => {
    if (res.status === 1) {
      return true
    }
    Message.error(res.message)
    return false
  }).catch(_ => {
    Message.error('服务器异常')
    return false
  })
}
