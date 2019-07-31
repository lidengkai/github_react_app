import IconInternal from './Icon'
import { IconNamespace } from './interface'

declare const Icon: typeof IconInternal

declare namespace Icon {
  type Props = IconNamespace.Props
}

export default Icon
