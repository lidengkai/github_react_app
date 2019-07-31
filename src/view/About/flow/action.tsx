import store from '@/store'
import history from '@/history'
import { NAME } from './constant'
import { init, commit } from './store'
import * as requests from '../api/requests'
import { Store } from '../interface'
import Message from '@/component/Message'

const getState: GetState<typeof NAME, Store> = (key = NAME) => {
  const state: any = store.getState()
  return state[key] || {}
}

/** 初始化 */
export const initPage = async () => {
  store.dispatch(init())
}

/** 登出 */
export const logout = async () => {
  const res = await requests.logout()
  if (res) {
    history.push('/user/login')
  }
}
