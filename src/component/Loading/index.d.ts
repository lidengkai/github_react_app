import LoadingInternal from './Loading'
import { LoadingNamespace } from './interface'

declare const Loading: typeof LoadingInternal

declare namespace Loading {
  type Props = LoadingNamespace.Props
}

export default Loading
