import classnames from 'classnames'
import styles from './style.less'
import { PageNamespace } from '../interface'

const Page: FC<PageNamespace.Props> = memo((props) => {
  const { className, style, hasMenu, header, children } = props

  return (
    <>
      <div className={classnames(styles.root, {
        [styles.hasMenu]: hasMenu
      })}
      >
        <div className={classnames(styles.body, {
          [styles.hasHeader]: header
        })}
        >
          {header ? <div className={styles.header}>{header}</div> : null}
          <div className={classnames(styles.content, className)} style={style}>
            {children}</div>
        </div>
      </div>
    </>
  )
})

export default Page
