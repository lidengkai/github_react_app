export declare namespace ConfigNamespace {
  interface Info {
    tab: ReactNode
    value: string
  }
  type List = Array<Info>
  interface Context {
    times: number
    from: number
    to: number
    list: List
    value: string | undefined
    saveInfo(info: Info): void
  }
}

export declare namespace TabNamespace {
  type Info = ConfigNamespace.Info
  type List = ConfigNamespace.List
  interface Props {
    className?: string
    style?: CSSProperties
    onChange?(value: string, info: Info): void
    value?: string | undefined
    forceCenter?: boolean
    onlyContent?: boolean
  }
}

export declare namespace ContentNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
    tab?: ReactNode
    value: string
  }
}
