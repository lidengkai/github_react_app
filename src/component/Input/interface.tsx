export declare namespace InputNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
  }
}

export declare namespace StripNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
    type?: React.InputHTMLAttributes<HTMLInputElement>['type']
    value?: string
    onChange?(value: string): void
    placeholder?: string
    icon?: ReactNode
  }
}
