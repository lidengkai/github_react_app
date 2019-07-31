import store from '@/store'
import history from '@/history'
import { NAME } from './constant'
import { init, commit } from './store'
import { Store } from '../interface'
import Message from '@/component/Message'

const getState: GetState<typeof NAME, Store> = (key = NAME) => {
  const state: any = store.getState()
  return state[key] || {}
}

/** 初始化 */
export const initPage = async () => {
  store.dispatch(init())
  const defaultType = sessionStorage.getItem('local-url-type') || ''
  if (defaultType === 'mock' || defaultType === 'agency' || defaultType === 'default') {
    store.dispatch(commit({ type: defaultType, defaultType }))
  }
}

export const changeType = async (type: Store['type']) => {
  store.dispatch(commit({ type }))
}

export const open = async () => {
  store.dispatch(commit({ show: true }))
}

export const submit = async () => {
  const { type } = getState()
  sessionStorage.setItem('local-url-type', type)
  location.reload()
}

export const cancel = async () => {
  const { defaultType } = getState()
  store.dispatch(commit({ type: defaultType, show: false }))
}
