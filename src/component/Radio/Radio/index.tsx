import classnames from 'classnames'
import styles from './style.less'
import { RadioNamespace } from '../interface'
import { Context } from '../config'

const Radio: FC<RadioNamespace.Props> = memo((props) => {
  const { value, onChange, children } = props

  return (
    <>
      <Context.Provider value={{
        value,
        onChange
      }}
      >
        <div>{children}</div>
      </Context.Provider>
    </>
  )
})

export default Radio
