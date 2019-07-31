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


export const validateUsername = async (value: string) => {
  if (!value.trim()) {
    Message.warn('用户名不能为空')
    return false
  }
  return true
}

export const validatePassword = async (value: string) => {
  if (!value.trim()) {
    Message.warn('密码不能为空')
    return false
  }
  return true
}

export const submit = async () => {
  const { username, password } = getState()
  if (!await validateUsername(username)) {
    return
  }
  if (!await validatePassword(password)) {
    return
  }
  const res = await requests.login({
    username,
    password
  })
  if (res) {
    history.push('/')
  }
}

export const changeUsername = async (username: string) => {
  store.dispatch(commit({ username }))
}

export const changePassword = async (password: string) => {
  store.dispatch(commit({ password }))
}
