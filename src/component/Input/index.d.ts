import InputInternal from './Input'
import StripInternal from './Strip'
import { InputNamespace, StripNamespace } from './interface'

declare const Input: typeof InputInternal & {
  Strip: typeof StripInternal
}
declare const Strip: typeof StripInternal

declare namespace Input {
  type Props = InputNamespace.Props
  namespace Strip {
    type Props = StripNamespace.Props
  }
}
declare namespace Strip {
  type Props = StripNamespace.Props
}

export default Input
export {
  Strip
}
