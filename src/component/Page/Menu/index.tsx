import classnames from 'classnames'
import styles from './style.less'
import { MenuNamespace } from '../interface'

const Menu: FC<MenuNamespace.Props> = memo((props) => {
  const { className, style, menu = [], active, onChange } = props
  const activeRef = useRef<MenuNamespace.InfoContainer>({
    info: null,
    index: -1,
    isActive: true
  })

  const click = useCallback((data: MenuNamespace.InfoContainer) => {
    if (data.isActive) {
      return
    }
    typeof onChange === 'function' && onChange(data.info!, {
      form: activeRef.current.info,
      to: data.info!,
      formIndex: activeRef.current.index,
      toIndex: data.index
    })
  }, [onChange])

  const node = useMemo(() => {
    return menu.map((info, index) => {
      const { pathname, text, activeIcon, icon } = info
      const isActive = active === pathname
      const data = { info, index, isActive }
      if (isActive) {
        activeRef.current = data
      }
      return (
        <div key={index}
          className={classnames(styles.item, { [styles.active]: isActive })}
          onClick={_ => click(data)}
        >
          <div className={styles.content}>
            <div className={styles.icon}>{isActive ? activeIcon : icon}</div>
            <div className={styles.text}>{text}</div>
          </div>
        </div>
      )
    })
  }, [menu, active])

  return (
    <>
      <div className={classnames(styles.root, className)} style={style}>
        <div className={styles.list}>{node}</div>
      </div>
    </>
  )
})

export default Menu
