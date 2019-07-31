import classnames from 'classnames'
import styles from './style.less'
import { ListNamespace } from '../interface'
import Loading from '@/component/Loading'

const REFRESH_MOVE = 100

const List: FC<ListNamespace.Props> = memo((props) => {
  const {
    className, style, children, getData,
    page: initialPage, hasMore: initialHasMore = false, scrollTop: initialScrollTop,
    beforeUnmount
  } = props
  const [css, setCss] = useState<CSSProperties>({})
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [headerStep, setHeaderStep] = useState<number>(0)
  const [footerStep, setFooterStep] = useState<number>(0)
  const requestRef = useRef<ListNamespace.RequestRef>({
    page: 1,
    hasMore: true,
    loading: false
  })
  const moveRef = useRef<ListNamespace.MoveRef>({
    startY: 0
  })
  const bodyRef = useRef<HTMLDivElement>(null)

  const deal: ListNamespace.Deal = useCallback((old, data) => {
    if (requestRef.current.page === 1) {
      return ([] as any).concat(data)
    }
    return ([] as any).concat(old, data)
  }, [])

  const requestInfo = useCallback((init?: boolean) => {
    if (!requestRef.current.loading) {
      if (init) {
        requestRef.current.page = 1
        requestRef.current.hasMore = true
        setHasMore(true)
        setLoading(false)
      }
      if (requestRef.current.hasMore) {
        if (typeof getData === 'function') {
          requestRef.current.loading = true
          setLoading(true)
          Promise.resolve(getData(requestRef.current.page, deal)).then(hasMore => {
            requestRef.current.page++
            requestRef.current.hasMore = hasMore
            requestRef.current.loading = false
            setHasMore(hasMore)
            setLoading(false)
          }).catch(_ => {
            requestRef.current.loading = false
            setLoading(false)
          })
        }
      }
    }
  }, [getData])

  const updateCss = useCallback((move: number, time: number, init?: boolean) => {
    if (init) {
      setHeaderStep(0)
      setFooterStep(0)
    } else {
      if (move > 0) {
        if (move > REFRESH_MOVE) {
          setHeaderStep(1)
        } else {
          setHeaderStep(0)
        }
      } else if (move < 0) {
        if (move < -REFRESH_MOVE) {
          setFooterStep(1)
        } else {
          setFooterStep(0)
        }
      }
    }
    setCss({
      transform: `translateY(${move / 2}px)`,
      transitionDuration: time + 'ms',
      ...(move ? { overflow: 'hidden' } : {})
    })
  }, [])

  const touchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const { pageY } = e.touches[0]
    moveRef.current.startY = pageY
    updateCss(0, 0, true)
  }, [])

  const touchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const { pageY } = e.touches[0]
    let moveY = pageY - moveRef.current.startY
    const { offsetHeight, scrollHeight, scrollTop } = bodyRef.current!
    if (moveY > 0) {
      if (scrollTop > 0) {
        moveRef.current.startY = pageY
        moveY = 0
      }
    } else if (moveY < 0) {
      if (offsetHeight + scrollTop < scrollHeight) {
        moveRef.current.startY = pageY
        moveY = 0
      }
    }
    updateCss(moveY, 0)
  }, [])

  const touchEnd = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const { pageY } = e.changedTouches[0]
    const moveY = pageY - moveRef.current.startY
    if (moveY > REFRESH_MOVE) {
      requestInfo(true)
    } else if (moveY < -REFRESH_MOVE) {
      requestInfo()
    }
    updateCss(0, 300)
  }, [requestInfo])

  useEffect(() => {
    bodyRef.current!.scrollTo({
      top: initialScrollTop
    })
    if (initialPage) {
      requestRef.current.page = initialPage + 1
      requestRef.current.hasMore = initialHasMore
      requestRef.current.loading = false
      setHasMore(hasMore)
      setLoading(false)
      return
    }
    requestInfo(true)
  }, [])

  useEffect(() => {
    return () => {
      if (typeof beforeUnmount === 'function') {
        const { scrollTop } = bodyRef.current!
        const { page, hasMore } = requestRef.current
        beforeUnmount({ page, hasMore, scrollTop })
      }
    }
  }, [beforeUnmount])

  return (
    <>
      <div className={classnames(styles.root, className)} style={style}>
        <div className={styles.container}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          <div className={styles.content}>
            <div className={styles.header} style={css}>
              {loading ? <div>正在加载数据，请稍等...</div> :
                headerStep === 1 ? <div>释放刷新列表</div> :
                  <div>下拉刷新列表</div>}
            </div>
            <div className={styles.body} style={css} ref={bodyRef}>
              <div className={styles.list}>{children}</div>
              {/* <div className={styles.line}>我是有底线的~</div> */}
            </div>
            <div className={styles.footer} style={css}>
              {loading ? <div>正在加载数据，请稍等...</div> :
                hasMore ?
                  footerStep === 1 ? <div>释放获取更多数据</div> :
                    <div>上拉获取更多数据</div> :
                  <div>我是有底线的~</div>}
            </div>
            <Loading className={styles.loading} show={loading} />
          </div>
        </div>
      </div>
    </>
  )
})

export default List
