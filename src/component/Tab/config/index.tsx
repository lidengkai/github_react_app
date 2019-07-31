import { ConfigNamespace } from '../interface'

export const Context = React.createContext<ConfigNamespace.Context>({
  times: 0,
  from: -1,
  to: -1,
  list: [],
  value: undefined,
  saveInfo() {
  }
})
