export declare namespace ModalNamespace {
  export interface Props {
    className?: string
    style?: CSSProperties
    show?: boolean
    noOk?: boolean
    noCancel?: boolean
    onOk?(): void
    onClose?(): void
  }
}
