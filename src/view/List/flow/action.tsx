import store from '@/store'
import history from '@/history'
import { NAME } from './constant'
import { init, commit } from './store'
import * as requests from '../api/requests'
import { Store } from '../interface'
import Message from '@/component/Message'
import List from '@/component/List'

const getState: GetState<typeof NAME, Store> = (key = NAME) => {
  const state: any = store.getState()
  return state[key] || {}
}

/** 初始化 */
export const initPage = async () => {
  store.dispatch(init())
}

/** 请求数据 */
export const requestList: List.Props['getData'] = async (page, deal) => {
  const { limit, data: old } = getState()
  const res = await requests.list({
    page,
    limit
  })
  if (res) {
    const { total, list } = res
    const data = deal<Store['data']>(old, list)
    store.dispatch(commit({ data }))
    return page * limit < total
  }
  return false
}
