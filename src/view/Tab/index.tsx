import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import Page from '@/component/Page'
import T from '@/component/Tab'

const Tab: FC<Props & Store> = memo((props) => {
  const { value } = props

  useEffect(() => {
    action.initPage()
  }, [])

  return (
    <>
      <Page header={<Page.Header>tab</Page.Header>}>
        <T forceCenter value={value} onChange={action.changeValue}>
          <T.Content tab="标签1" value="1">内容1</T.Content>
          <T.Content tab="标签2" value="2">内容2</T.Content>
          <T.Content tab="标签3" value="3">内容3</T.Content>
          <T.Content tab="标签4" value="4">内容4</T.Content>
          <T.Content tab="标签5" value="5">内容5</T.Content>
          <T.Content tab="标签6" value="6">内容6</T.Content>
        </T>
      </Page>
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const data = state[NAME]
  return {
    value: data.value
  }
}

export default connect(mapStateToProps)(Tab)
