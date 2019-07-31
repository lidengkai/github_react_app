import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import { layoutUserConfig } from '@/config/imports'
import WithLazy from '@/utils/WithLazy'
import { Switch, Route, Redirect } from 'react-router-dom'

const LayoutUser: FC<Props & Store> = memo(() => {
  useEffect(() => {
    action.initPage()
  }, [])

  const routeNode = useMemo(() => {
    const node = []
    for (const item of layoutUserConfig) {
      const { path, exact = true, redirect } = item
      if (redirect) {
        node.push(
          <Redirect key={path} path={path} exact={exact} to={redirect} />
        )
      } else {
        node.push(
          <Route key={path} path={path} exact={exact} component={WithLazy} />
        )
      }
    }
    return node
  }, [])

  return (
    <>
      <Switch>
        {routeNode}
        <Redirect path="/*" to="/exception/404" />
      </Switch>
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const data = state[NAME]
  return {
  }
}

export default connect(mapStateToProps)(LayoutUser)
