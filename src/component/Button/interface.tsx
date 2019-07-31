export declare namespace ButtonNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
  }
}

export declare namespace StripNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    onClick?(): void
  }
}
