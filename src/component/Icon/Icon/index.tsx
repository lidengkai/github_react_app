import classnames from 'classnames'
import styles from './style.less'
import { IconNamespace } from '../interface'

const Icon: FC<IconNamespace.Props> = memo((props) => {
  const { className, style, src, align, vertical, onClick } = props

  const alignClassName = useMemo(() => {
    switch (align) {
      case 'left':
        return styles.alignLeft
      case 'right':
        return styles.alignRight
      case 'center':
        return styles.alignCenter
    }
  }, [align])

  const verticalClassName = useMemo(() => {
    switch (vertical) {
      case 'top':
        return styles.verticalTop
      case 'bottom':
        return styles.verticalBottom
      case 'middle':
        return styles.verticalMiddle
    }
  }, [vertical])

  if (typeof src === 'string') {
    return (
      <>
        <div className={classnames(styles.image, alignClassName, verticalClassName)} onClick={onClick}>
          <div className={classnames(styles.content, className)} style={style}>
            <img src={src} />
          </div>
        </div>
      </>
    )
  }

  return null
})

export default Icon
