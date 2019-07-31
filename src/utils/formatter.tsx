import moment, { Moment } from 'moment'

/** 字符串 */
export const toString: {
  (value: any): string
  (value: any, canUndefined: true): string | undefined
} = (value: any, canUndefined?: boolean) => {
  const result = value || value === 0 ? value.toString().trim() : ''
  return canUndefined && !result ? undefined : result
}

/** 数字 */
export const toNumber: {
  (value: any): number
  (value: any, canUndefined: true): number | undefined
} = (value: any, canUndefined?: boolean) => {
  const result = Number(value)
  if (canUndefined) {
    if (isNaN(result) || (typeof value === 'string' && !value.trim())) {
      return undefined as any
    }
  }
  return result || 0
}

/** 数组 */
export const toArray = (value: any): any[] => {
  return value instanceof Array ? value : []
}

/** moment */
export const toMoment = (value: any): Moment | '' => {
  return value ? moment(value) : ''
}

/** 字符串转数组 */
export const stringToArray = (value: any, splitCode = ','): string[] => {
  return typeof value === 'string' && value ? value.split(splitCode) : []
}

/** 数组转字符串 */
export const arrayToString = (value: any, splitCode = ','): string => {
  return value instanceof Array ? value.join(splitCode) : ''
}

/** 字符串转json */
export const stringToJson = (value: any): any => {
  try {
    return JSON.parse(value)
  } catch (_) {
    return null
  }
}

/** json转字符串 */
export const jsonToString = (value: any): string => {
  try {
    return JSON.stringify(value)
  } catch (_) {
    return ''
  }
}
