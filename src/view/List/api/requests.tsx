import Message from '@/component/Message'
import request from '@/utils/request'
import { List } from './utils'
import * as  time from '@/utils/time'

export const list: List.Fn = (data) => {
  const { page, limit } = data
  const total = 56
  return time.nextTime(1000).then(_ => {
    return {
      total,
      list: Array(limit).fill(0).map((_, index) => {
        const id = (page - 1) * limit + index + 1
        return {
          id,
          text: 'text-id:' + id
        }
      }).filter(t => t.id <= total)
    }
  })
}
