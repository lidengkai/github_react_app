import classnames from 'classnames'
import styles from './style.less'
import { HeaderNamespace } from '../interface'
import history from '@/history'

const Header: FC<HeaderNamespace.Props> = memo((props) => {
  const { className, style, noBack, icon, children } = props

  const click = useCallback(() => {
    history.goBack()
  }, [])

  return (
    <>
      <div className={classnames(styles.root, className)} style={style}>
        <div className={styles.body}>
          <div className={styles.left}>
            {noBack ? null : <div className={styles.arrow} onClick={click} />}
          </div>
          <div className={styles.content}>{children}</div>
          <div className={styles.right}>{icon}</div>
        </div>
      </div>
    </>
  )
})

export default Header
