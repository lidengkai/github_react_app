import ReactDOM from 'react-dom'
import App from './App'
import './index.less'

console.log('%c当前环境:' + process.env.NODE_ENV, 'background-color: yellow;', {
  WEBPACK_MODE,
  WEBPACK_ENV
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
