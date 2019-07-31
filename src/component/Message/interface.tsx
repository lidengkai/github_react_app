export declare namespace MessageNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
    onCancel?(): void
    icon?: ReactNode
  }
}

export declare namespace InfoNamespace {
  interface Props extends Omit<MessageNamespace.Props, 'icon'> {
    text?: string
  }
}

export declare namespace WarnNamespace {
  interface Props extends Omit<MessageNamespace.Props, 'icon'> {
    text?: string
  }
}

export declare namespace ErrorNamespace {
  interface Props extends Omit<MessageNamespace.Props, 'icon'> {
    text?: string
  }
}
