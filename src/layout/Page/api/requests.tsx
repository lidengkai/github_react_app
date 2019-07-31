import Message from '@/component/Message'
import request from '@/utils/request'
import { UserInfo } from './utils'

export const userInfo: UserInfo.Fn = () => {
  return request({
    url: '/user/info',
    method: 'get'
  }).then((res) => {
    if (res.status === 1) {
      return UserInfo.setResponse(res.data)
    }
    Message.error(res.message)
    return false
  }).catch(_ => {
    Message.error('服务器异常')
    return false
  })
}
