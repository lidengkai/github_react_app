import classnames from 'classnames'
import styles from './style.less'
import { StripNamespace } from '../interface'

const Strip: FC<StripNamespace.Props> = memo((props) => {
  const { className, style, type = 'text', value, onChange, placeholder, icon } = props

  const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    typeof onChange === 'function' && onChange(e.target.value)
  }, [onChange])

  return (
    <>
      <div className={classnames(styles.root, className)} style={style}>
        {icon ? <div className={styles.left}>{icon}</div> : null}
        <div className={styles.right}>
          <input className={styles.input}
            type={type}
            autoComplete="new-password"
            value={value}
            onChange={change}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  )
})

export default Strip
