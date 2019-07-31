import * as formatter from '@/utils/formatter'
import { Store } from '../interface'

export namespace List {
  type Request = {
    page: number
    limit: number
  }
  type Response = {
    total: number
    list: {
      id: number
      text: string
    }[]
  }
  export type Fn = Ajax<Request, Response>
  export const setRequest = (value: Request): any => {
    return value
  }
  export const setResponse = (value: any): Response => {
    return value
  }
}
