import { GlobalStore } from '@/store'

export interface Props {
}

export type Store = GlobalStore

export type IndexStore = Pick<Store, never>
