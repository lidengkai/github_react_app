import classnames from 'classnames'
import styles from './style.less'
import { ContentNamespace } from '../interface'
import { CSSTransition } from 'react-transition-group'
import { Context } from '../config'

const Content: FC<ContentNamespace.Props> = memo((props) => {
  const { tab, value, children } = props
  const { times, from, to, list, value: currentValue, saveInfo } = useContext(Context)

  const info = useMemo(() => {
    return {
      tab,
      value
    }
  }, [tab])

  useEffect(() => {
    saveInfo(info)
  }, [times])

  const show = useMemo(() => {
    return value === currentValue
  }, [value, currentValue])

  const classNames = useMemo(() => {
    const index = list.findIndex(t => t.value === value)
    if (from > -1 && to > -1) {
      if (from < to) {
        if (index === from) {
          return styles.leftLeave
        }
        if (index === to) {
          return styles.rightInto
        }
      } else if (from > to) {
        if (index === from) {
          return styles.rightLeave
        }
        if (index === to) {
          return styles.leftInto
        }
      }
    }
    return ''
  }, [from, to, list, value])

  return (
    <CSSTransition
      in={show}
      mountOnEnter
      timeout={300}
      classNames={classNames}
    >
      <div className={classnames(styles.root, { [styles.active]: show })}>{children}</div>
    </CSSTransition>
  )
})

export default Content
