import * as formatter from '@/utils/formatter'
import { Store } from '../interface'

export namespace _Example {
  type Request = void
  type Response = void
  export type Fn = Ajax<Request, Response>
  export const setRequest = (value: Request): any => {
    return value
  }
  export const setResponse = (value: any): Response => {
    return value
  }
}
