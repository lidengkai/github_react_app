import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import Page from '@/component/Page'
import L from '@/component/List'

const List: FC<Props & Store> = memo((props) => {
  const { data } = props

  useEffect(() => {
    action.initPage()
  }, [])

  return (
    <>
      <Page header={<Page.Header>list</Page.Header>}>
        <L className={styles.root} getData={action.requestList}>
          {data.map(info => {
            const { id, text } = info
            return (
              <div key={id} className={styles.item}>{text}</div>
            )
          })}
        </L>
      </Page>
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const data = state[NAME]
  return {
    data: data.data
  }
}

export default connect(mapStateToProps)(List)
