import { INIT, COMMIT } from './constant'
import { Store } from '../interface'

const initialState: Store = {
  show: false,
  type: 'mock',
  defaultType: 'mock'
}

export default (state = initialState, action: any) => {
  const { type, data } = action
  switch (type) {
    case INIT:
      return { ...initialState }
    case COMMIT:
      return { ...state, ...data }
    default:
      return { ...state }
  }
}

export const init = () => {
  return { type: INIT }
}

export const commit = (data: Partial<Store> = {}) => {
  return { type: COMMIT, data }
}
