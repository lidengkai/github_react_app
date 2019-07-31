import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import Page from '@/component/Page'

const Test: FC<Props & Store> = memo(() => {
  useEffect(() => {
    action.initPage()
  }, [])

  return (
    <>
      <Page>
        <div className={styles.root}>
          <div className={styles.card}>
            <div className={styles.text}>权限测试，仅test用户可访问</div>
            <div className={styles.link}>
              <a onClick={action.toHome}>返回首页</a>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const data = state[NAME]
  return {
  }
}

export default connect(mapStateToProps)(Test)
