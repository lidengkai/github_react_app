import classnames from 'classnames'
import styles from './style.less'
import { TabNamespace } from '../interface'
import { Context } from '../config'

const Tab: FC<TabNamespace.Props> = memo((props) => {
  const { children, onlyContent, value: currentValue, onChange, forceCenter } = props
  const [from, setFrom] = useState<number>(-1)
  const [to, setTo] = useState<number>(-1)
  const [list, setList] = useState<TabNamespace.List>([])
  const [contextValue, setContextValue] = useState<string | undefined>()
  const timesRef = useRef<number>(0)
  const listRef = useRef<TabNamespace.List>([])
  const prevRef = useRef<string | undefined>()
  const headerRef = useRef<HTMLDivElement>(null)

  const times = useMemo(() => {
    listRef.current = []
    return timesRef.current++
  }, [children])

  const saveInfo = useCallback((info) => {
    listRef.current.push(info)
  }, [])

  useEffect(() => {
    const list = listRef.current
    const from = list.findIndex(t => t.value === prevRef.current)
    const to = list.findIndex(t => t.value === currentValue)
    setFrom(from)
    setTo(to)
    setList(list)
    setContextValue(currentValue)
    prevRef.current = currentValue
  }, [times, currentValue])

  useEffect(() => {
    if (forceCenter) {
      const { length } = list
      const index = list.findIndex(t => t.value === currentValue)
      const { scrollWidth, clientWidth } = headerRef.current!
      headerRef.current!.scrollTo({
        left: scrollWidth / length * (index + 0.5) - clientWidth / 2
      })
    }
  }, [contextValue, list, forceCenter])

  const click = useCallback((info: TabNamespace.Info) => {
    const { value } = info
    if (value !== currentValue) {
      typeof onChange === 'function' && onChange(value, info)
    }
  }, [currentValue, onChange])

  return (
    <>
      <Context.Provider value={{
        times,
        from,
        to,
        list,
        value: contextValue,
        saveInfo
      }}
      >
        <div className={classnames(styles.root, { [styles.showHeader]: !onlyContent })}>
          {!onlyContent ? <div className={styles.header} ref={headerRef}>
            {list.map((item, index) => {
              const { tab, value } = item
              const isActive = value === contextValue
              return (
                <div className={classnames(styles.item, { [styles.active]: isActive })}
                  key={index}
                  onClick={_ => click(item)}
                >
                  <div className={styles.content}>{tab}</div>
                  <div className={styles.line}></div>
                </div>
              )
            })}
          </div> : null}
          <div className={styles.body}>{children}</div>
        </div>
      </Context.Provider>
    </>
  )
})

export default Tab
