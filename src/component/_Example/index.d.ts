import _ExampleInternal from './_Example'
import { _ExampleNamespace } from './interface'

declare const _Example: typeof _ExampleInternal

declare namespace _Example {
  type Props = _ExampleNamespace.Props
}

export default _Example
