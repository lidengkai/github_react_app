import ButtonInternal from './Button'
import StripInternal from './Strip'
import { ButtonNamespace, StripNamespace } from './interface'

declare const Button: typeof ButtonInternal & {
  Strip: typeof StripInternal
}
declare const Strip: typeof StripInternal

declare namespace Button {
  type Props = ButtonNamespace.Props
  namespace Strip {
    type Props = StripNamespace.Props
  }
}
declare namespace Strip {
  type Props = StripNamespace.Props
}

export default Button
export {
  Strip
}
