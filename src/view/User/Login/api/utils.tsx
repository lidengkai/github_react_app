import * as formatter from '@/utils/formatter'
import { Store } from '../interface'

export namespace Login {
  type Request = {
    username: string
    password: string
  }
  type Response = true
  export type Fn = Ajax<Request, Response>
  export const setRequest = (value: Request): any => {
    const {
      username,
      password,
    } = value
    return {
      username: username.trim(),
      password: password.trim()
    }
  }
  export const setResponse = (value: any): Response => {
    return value
  }
}
