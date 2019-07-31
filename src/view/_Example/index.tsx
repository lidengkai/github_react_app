import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'

const _Example: FC<Props & Store> = memo(() => {
  useEffect(() => {
    action.initPage()
  }, [])

  return (
    <>
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const data = state[NAME]
  return {
  }
}

export default connect(mapStateToProps)(_Example)
