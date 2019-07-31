import RadioInternal from './Radio'
import ItemInternal from './Item'
import { RadioNamespace, ItemNamespace } from './interface'

declare const Radio: typeof RadioInternal & {
  Item: typeof ItemInternal
}
declare const Item: typeof ItemInternal

declare namespace Radio {
  type Props = RadioNamespace.Props
  namespace Item {
    type Props = ItemNamespace.Props
  }
}
declare namespace Item {
  type Props = ItemNamespace.Props
}

export default Radio
export {
  Item
}
