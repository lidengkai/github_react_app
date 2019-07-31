import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import Page from '@/component/Page'

const Exception404: FC<Props & Store> = memo(() => {
  return (
    <>
      <Page>
        <div className={styles.root}>
          <div className={styles.card}>
            <div className={styles.text}>404</div>
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

export default connect(mapStateToProps)(Exception404)
