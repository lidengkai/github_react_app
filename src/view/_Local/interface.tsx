export interface Props {
}

export interface Store {
  show: boolean
  type: 'mock' | 'agency' | 'default'
  defaultType: Store['type']
}

export type IndexStore = Pick<Store, 'show' | 'type'>

export interface Position {
  minTop: number
  minLeft: number
  maxTop: number
  maxLeft: number
  top: number
  left: number
  startTop: number
  startLeft: number
  startX: number
  startY: number
}
