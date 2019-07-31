export interface Props {
}

export interface Store {
  limit: number
  data: {
    id: number
    text: string
  }[]
}

export type IndexStore = Pick<Store, 'data'>
