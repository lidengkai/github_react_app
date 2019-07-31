import classnames from 'classnames'
import styles from './style.less'
import { StripNamespace } from '../interface'

const Strip: FC<StripNamespace.Props> = memo((props) => {
  const { className, style, type = 'button', onClick, children } = props

  const click = useCallback(() => {
    typeof onClick === 'function' && onClick()
  }, [onClick])

  return (
    <>
      <div className={classnames(styles.root, className)} style={style}>
        <button className={styles.button}
          type={type}
          onClick={click}
        >{children}</button>
      </div>
    </>
  )
})

export default Strip
