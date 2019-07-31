import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import store from './store'
import history from './history'
import LayoutUser from '@/layout/User'
import LayoutPage from '@/layout/Page'

const App: FC<{}> = memo(() => {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/user" component={LayoutUser} />
            <Route path="/" component={LayoutPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
})

export default App
