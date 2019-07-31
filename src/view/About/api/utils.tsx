import * as formatter from '@/utils/formatter'
import { Store } from '../interface'

export namespace Logout {
  export type Request = void
  export type Response = true
  export type Fn = Ajax<Request, Response>
  export const setRequest = (value: Request): any => {
    return value
  }
  export const setResponse = (value: any): Response => {
    return value
  }
}
