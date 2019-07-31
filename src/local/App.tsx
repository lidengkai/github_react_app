import { Provider } from 'react-redux'
import store from '@/store'
import Local from '@/view/_Local'

const App: FC<{}> = memo(() => {
  return (
    <>
      <Provider store={store}>
        <Local />
      </Provider>
    </>
  )
})

export default App
