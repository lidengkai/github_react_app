import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store, Position } from './interface'
import { connect } from 'react-redux'
import Modal from '@/component/Modal'
import Radio from '@/component/Radio'

const App: FC<Props & Store> = memo((props) => {
  const { show, type } = props
  const [css, setCss] = useState<CSSProperties>({})
  const ref = useRef<HTMLDivElement>(null)
  const position = useRef<Position>({
    minTop: 0,
    minLeft: 0,
    maxTop: 0,
    maxLeft: 0,
    top: 0,
    left: 0,
    startTop: 0,
    startLeft: 0,
    startX: 0,
    startY: 0
  })

  const changeCss = useCallback((timeout = 0) => {
    const { top, left } = position.current
    setCss({
      top: top,
      left: left,
      right: 'auto',
      bottom: 'auto',
      transition: timeout + 'ms all'
    })
  }, [])

  const start = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e.touches[0]
    const { top, left, width, height } = ref.current!.getBoundingClientRect()
    const { innerWidth, innerHeight } = window
    position.current.minTop = - height / 2
    position.current.minLeft = - width / 2
    position.current.maxTop = innerHeight - height / 2
    position.current.maxLeft = innerWidth - width / 2
    position.current.top = top
    position.current.left = left
    position.current.startTop = top
    position.current.startLeft = left
    position.current.startX = pageX
    position.current.startY = pageY
    changeCss()
  }, [])

  const move = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e.touches[0]
    const { startTop, startLeft, startX, startY } = position.current
    const moveX = pageX - startX
    const moveY = pageY - startY
    position.current.top = startTop + moveY
    position.current.left = startLeft + moveX
    changeCss()
  }, [])

  const end = useCallback(() => {
    const { maxTop, maxLeft, minTop, minLeft, top, left } = position.current
    position.current.top = Math.max(Math.min(maxTop, top), minTop)
    position.current.left = Math.max(Math.min(maxLeft, left), minLeft)
    changeCss(300)
  }, [])

  useEffect(() => {
    action.initPage()
  }, [])

  return (
    <>
      <div className={styles.root}
        style={css}
        ref={ref}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={end}
        onClick={action.open}
      >
      </div>
      <Modal show={show}
        onOk={action.submit}
        onClose={action.cancel}
      >
        <div className={styles.form}>
          <Radio value={type} onChange={action.changeType}>
            <Radio.Item value="default">默认请求</Radio.Item>
            <Radio.Item value="agency">使用代理</Radio.Item>
            <Radio.Item value="mock">使用mock</Radio.Item>
          </Radio>
        </div>
      </Modal>
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const data = state[NAME]
  return {
    show: data.show,
    type: data.type
  }
}

export default connect(mapStateToProps)(App)
