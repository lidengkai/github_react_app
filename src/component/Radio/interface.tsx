export declare namespace ConfigNamespace {
  interface Context {
    value: string | undefined
    onChange: ((value: string) => void) | undefined
  }
}

export declare namespace RadioNamespace {
  export interface Props {
    className?: string
    style?: CSSProperties
    value?: string
    onChange?(value: string): void
  }
}

export declare namespace ItemNamespace {
  export interface Props {
    className?: string
    style?: CSSProperties
    value: string
  }
}
