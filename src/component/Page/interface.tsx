export declare namespace PageNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
    hasMenu?: boolean
    header?: ReactNode
  }
}

export declare namespace MenuNamespace {
  interface Info {
    pathname: string
    icon?: ReactNode
    activeIcon?: ReactNode
    text?: string
  }
  interface More {
    form: Info | null
    to: Info
    formIndex: number
    toIndex: number
  }
  interface InfoContainer {
    info: Info | null
    index: number
    isActive: boolean
  }
  interface Props {
    className?: string
    style?: CSSProperties
    menu?: Info[]
    active?: string
    onChange?(info: Info, more: More): void
  }
}

export declare namespace HeaderNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
    noBack?: boolean
    icon?: ReactNode
  }
}
