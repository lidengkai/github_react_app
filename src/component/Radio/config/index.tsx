import { ConfigNamespace } from '../interface'

export const Context = React.createContext<ConfigNamespace.Context>({
  value: undefined,
  onChange: undefined
})
