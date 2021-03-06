import classnames from 'classnames'
import styles from './style.less'
import { ErrorNamespace } from '../interface'
import Message from '../Message'
import Icon from '@/component/Icon'
import iconPath from '@/assets/component/message-error.svg'

const Error: FC<ErrorNamespace.Props> = memo((props) => {
  const { text, onCancel } = props

  return (
    <>
      <Message onCancel={onCancel} icon={<Icon className={styles.icon} src={iconPath} />}>
        <div className={styles.root}>{text}</div>
      </Message>
    </>
  )
})

export default Error
