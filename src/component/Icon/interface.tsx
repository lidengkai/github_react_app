export declare namespace IconNamespace {
  interface Props {
    className?: string
    style?: CSSProperties
    src?: string
    align?: 'left' | 'right' | 'center'
    vertical?: 'top' | 'bottom' | 'middle'
    onClick?(e: React.MouseEvent<HTMLDivElement>): void
  }
}
