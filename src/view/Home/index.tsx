import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import Page from '@/component/Page'

const Home: FC<Props & Store> = memo(() => {
  useEffect(() => {
    action.initPage()
  }, [])

  return (
    <>
      <Page hasMenu>
        <div className={styles.root}>
          <div className={styles.card}>
            <div className={styles.text}>home</div>
          </div>
          <div className={styles.card}>
            <div className={styles.link}>
              <a onClick={action.toList}>List</a>
            </div>
            <div className={styles.link}>
              <a onClick={action.toTab}>Tab</a>
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

export default connect(mapStateToProps)(Home)
