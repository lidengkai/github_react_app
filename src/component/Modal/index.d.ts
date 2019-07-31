import ModalInternal from './Modal'
import { ModalNamespace } from './interface'

declare const Modal: typeof ModalInternal

declare namespace Modal {
  type Props = ModalNamespace.Props
}

export default Modal
