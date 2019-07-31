import ListInternal from './List'
import { ListNamespace } from './interface'

declare const List: typeof ListInternal

declare namespace List {
  type Props = ListNamespace.Props
}

export default List