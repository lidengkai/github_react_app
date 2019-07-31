import classnames from 'classnames'
import styles from './style.less'
import { ModalNamespace } from '../interface'
import ReactDOM from 'react-dom'

const Modal: FC<ModalNamespace.Props> = memo((props) => {
  const { className, style, show, children, noOk, noCancel, onOk, onClose } = props
  const divRef = useRef<HTMLDivElement>(document.createElement('div'))
  const [showed, setShowed] = useState<boolean>(false)

  useEffect(() => {
    if (show && !showed) {
      setShowed(true)
      document.body.appendChild(divRef.current)
    }
  }, [show])

  useEffect(() => {
    return () => {
      const div = divRef.current
      if (document.body.contains(div)) {
        document.body.removeChild(div)
      }
    }
  }, [])

  const clickOk = useCallback(() => {
    typeof onOk === 'function' && onOk()
  }, [onOk])

  const clickCancel = useCallback(() => {
    typeof onClose === 'function' && onClose()
  }, [onClose])

  return showed ? ReactDOM.createPortal(
    <>
      <div className={classnames(styles.root, { [styles.show]: show })}>
        <div className={classnames(styles.container, className)} style={style}>
          <div>{children}</div>
          <div className={styles.footer}>
            {noOk ? null : <div className={styles.item} onClick={clickOk}>确&nbsp;定</div>}
            {noCancel ? null : <div className={styles.item} onClick={clickCancel}>取&nbsp;消</div>}
          </div>
        </div>
      </div>
    </>,
    divRef.current
  ) : null
})

export default Modal
