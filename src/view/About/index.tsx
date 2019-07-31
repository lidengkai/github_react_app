import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import Page from '@/component/Page'

const About: FC<Props & Store> = memo(() => {
  useEffect(() => {
    action.initPage()
  }, [])

  const config = useMemo(() => [
    { name: '示例组件', data: 'src/component/_Example' },
    { name: '示例页面', data: 'src/view/_Example' },
    { name: '配置路由', data: 'src/config/imports.tsx' },
    { name: '配置redux', data: 'src/store/reducers.tsx' },
    { name: '修改redux', data: 'src/view/_Example/flow/constant.tsx' }
  ], [])

  return (
    <>
      <Page hasMenu>
        <div className={styles.root}>
          <div className={styles.card}>
            {
              config.map((item, key) => (
                <div key={key} className={styles.line}>
                  <div className={styles.left}>{item.name}:</div>
                  <div className={styles.right}>{item.data}</div>
                </div>
              ))
            }
          </div>
          <div className={styles.card}>
            <div className={styles.text} onClick={action.logout}>退出登录</div>
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

export default connect(mapStateToProps)(About)
