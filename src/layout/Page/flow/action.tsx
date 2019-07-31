import store from '@/store'
import history from '@/history'
import { NAME } from './constant'
import { init, commit } from './store'
import * as requests from '../api/requests'
import { Store } from '../interface'
import Message from '@/component/Message'
import Page from '@/component/Page'

const getState: GetState<typeof NAME, Store> = (key = NAME) => {
  const state: any = store.getState()
  return state[key] || {}
}

/** 初始化 */
export const initPage = async () => {
  store.dispatch(init())
  store.dispatch(commit({ loading: true }))
  const res = await requests.userInfo()
  if (res) {
    const { id, role, username, auth } = res
    store.dispatch(commit({ id, role, username, auth, loading: false }))
  } else {
    history.push('/user/login')
  }
}

/** 页面跳转 */
export const changeMenu: Page.Menu.Props['onChange'] = async (info) => {
  const { pathname } = info
  history.push(pathname)
}

/** 页面切换时动画结束 */
export const endAnimation = async () => {
  store.dispatch(commit({ animationType: '', animationIng: false }))
}
