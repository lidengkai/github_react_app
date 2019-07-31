import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as list from './reducers'
import { NAME } from './flow/constant'
import AppStore from './flow/store'
import { Store } from './interface'

export const reducers = {
  [NAME]: AppStore,
  ...list
}

export default createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
)

export { NAME as globalName }
export { init as globalInit, commit as globalCommit } from './flow/store'
export type GlobalStore = Store
