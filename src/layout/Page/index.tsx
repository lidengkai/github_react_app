import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, IndexStore as Store } from './interface'
import { connect } from 'react-redux'
import { layoutPageConfig } from '@/config/imports'
import WithLazy from '@/utils/WithLazy'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Page from '@/component/Page'
import Icon from '@/component/Icon'
import Loading from '@/component/Loading'
import menuPath from '@/assets/svg/footer-menu.svg'
import menuActivePath from '@/assets/svg/footer-menu-active.svg'

const LayoutPage: FC<Props & Store> = memo((props) => {
  const { id, role, animationType = '', animationIng, loading } = props
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    action.initPage()
  }, [])

  const routeNode = useMemo(() => {
    const node = []
    for (const item of layoutPageConfig) {
      const { path, exact = true, redirect, role: list } = item
      if (list.indexOf(role) > -1) {
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
    }
    return node
  }, [role])

  const menu = useMemo((): Page.Menu.Props['menu'] => [
    {
      pathname: '/home',
      icon: <Icon src={menuPath} className={styles.icon} vertical="bottom" />,
      activeIcon: <Icon src={menuActivePath} className={styles.icon} vertical="bottom" />,
      text: '首页'
    }, {
      pathname: '/about',
      icon: <Icon src={menuPath} className={styles.icon} vertical="bottom" />,
      activeIcon: <Icon src={menuActivePath} className={styles.icon} vertical="bottom" />,
      text: '示例'
    }
  ], [])

  return (
    <>
      <div className={styles.root}>
        <div className={styles.page}>
          {id
            ? < TransitionGroup className={styles.group} component="span">
              <CSSTransition key={pathname}
                timeout={300}
                classNames={styles[animationType]}
                onEntered={action.endAnimation}
              >
                <Switch location={location}>
                  {routeNode}
                  {/* exception */}
                  <Route path="/exception/404" exact component={WithLazy} />
                  <Redirect path="/*" to="/exception/404" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            : null
          }
        </div>
        <Page.Menu className={styles.footer} menu={menu} active={pathname} onChange={action.changeMenu} />
        {animationIng ? <div className={styles.animationIng}></div> : null}
      </div>
      <Loading fixed show={loading} />
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const appData = state[NAME]
  return {
    id: appData.id,
    role: appData.role,
    username: appData.username,
    loading: appData.loading,
    animationType: appData.animationType,
    animationIng: appData.animationIng,
    auth: appData.auth
  }
}

export default connect(mapStateToProps)(LayoutPage)
