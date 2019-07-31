import { INIT, COMMIT } from './constant'
import { Store } from '../interface'

const initialState: Store = {
  id: 0,
  username: '',
  role: '',
  auth: '',
  loading: false,
  animationType: '',
  animationIng: false
}

export default function (state = initialState, action: any) {
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
