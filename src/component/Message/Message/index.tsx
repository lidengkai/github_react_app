import classnames from 'classnames'
import styles from './style.less'
import { MessageNamespace } from '../interface'
import { CSSTransition } from 'react-transition-group'

const timeout = 300 + 800

const Message: FC<MessageNamespace.Props> = memo((props) => {
  const { onCancel, children, icon } = props

  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const endAnimation = useCallback(() => {
    typeof onCancel === 'function' && onCancel()
  }, [onCancel])

  return (
    <>
      <CSSTransition
        in={show}
        timeout={timeout}
        classNames={styles.animation}
        onEntered={endAnimation}
      >
        <div className={styles.root}>
          <div className={styles.box}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </CSSTransition>
    </>
  )
})

export default Message
