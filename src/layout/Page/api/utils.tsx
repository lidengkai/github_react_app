import * as formatter from '@/utils/formatter'
import { Store } from '../interface'

export namespace UserInfo {
  type Request = void
  type Response = Pick<Store, 'id' | 'role' | 'username' | 'auth'>
  export type Fn = Ajax<Request, Response>
  export const setRequest = (value: Request): any => {
    return value
  }
  export const setResponse = (value: any): Response => {
    const { id, role, username, auth } = value || {}
    return {
      id: formatter.toNumber(id, true),
      role: formatter.toString(role),
      username: formatter.toString(username),
      auth: formatter.toString(auth)
    }
  }
}
