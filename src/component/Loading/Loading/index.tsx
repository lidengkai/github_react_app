import classnames from 'classnames'
import styles from './style.less'
import { LoadingNamespace } from '../interface'
import ReactDOM from 'react-dom'

const Loading: FC<LoadingNamespace.Props> = memo((props) => {
  const { className, style, show, fixed } = props
  const divRef = useRef<HTMLDivElement>(document.createElement('div'))
  const [showed, setShowed] = useState<boolean>(false)

  useEffect(() => {
    if (fixed && show && !showed) {
      setShowed(true)
      document.body.appendChild(divRef.current)
    }
  }, [show, fixed])

  useEffect(() => {
    return () => {
      const div = divRef.current
      if (document.body.contains(div)) {
        document.body.removeChild(div)
      }
    }
  }, [])

  const node = useMemo(() => {
    return (
      show ?
        <div className={classnames(styles.root, className, { [styles.fixed]: fixed })}
          style={style}
        >
          <div className={styles.icon}></div>
        </div>
        : null
    )
  }, [className, style, show, fixed])

  return (
    fixed ? ReactDOM.createPortal(node, divRef.current) : node
  )
})

export default Loading
