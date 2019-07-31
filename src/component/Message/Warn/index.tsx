import classnames from 'classnames'
import styles from './style.less'
import { WarnNamespace } from '../interface'
import Message from '../Message'
import Icon from '@/component/Icon'
import iconPath from '@/assets/component/message-warn.svg'

const Warn: FC<WarnNamespace.Props> = memo((props) => {
  const { text, onCancel } = props

  return (
    <>
      <Message onCancel={onCancel} icon={<Icon className={styles.icon} src={iconPath} />}>
        <div className={styles.root}>{text}</div>
      </Message>
    </>
  )
})

export default Warn
