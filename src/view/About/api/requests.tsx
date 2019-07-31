import Message from '@/component/Message'
import request from '@/utils/request'
import { Logout } from './utils'

export const logout: Logout.Fn = () => {
  return request({
    url: '/user/logout',
    method: 'get'
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
