import classnames from 'classnames'
import styles from './style.less'
import { ItemNamespace } from '../interface'
import { Context } from '../config'

const Radio: FC<ItemNamespace.Props> = memo((props) => {
  const { value, children } = props
  const { value: topValue, onChange } = useContext(Context)

  const isActive = useMemo(() => {
    return value === topValue
  }, [value, topValue])

  const change = useCallback(() => {
    if (isActive) {
      return
    }
    typeof onChange === 'function' && onChange(value)
  }, [isActive, value, onChange])

  return (
    <>
      <div className={classnames(styles.root, { [styles.active]: isActive })}
        onClick={change}
      >{children}</div>
    </>
  )
})

export default Radio
