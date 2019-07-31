import ReactDom from 'react-dom'
import Info from './Info'
import Warn from './Warn'
import Error from './Error'

const info = (text: string) => {
  const dom = document.createElement('span')
  document.body.appendChild(dom)
  const onCancel = () => dom.remove()
  ReactDom.render(<Info text={text} onCancel={onCancel} />, dom)
}

const warn = (text: string) => {
  const dom = document.createElement('span')
  document.body.appendChild(dom)
  const onCancel = () => dom.remove()
  ReactDom.render(<Warn text={text} onCancel={onCancel} />, dom)
}

const error = (text: string) => {
  const dom = document.createElement('span')
  document.body.appendChild(dom)
  const onCancel = () => dom.remove()
  ReactDom.render(<Error text={text} onCancel={onCancel} />, dom)
}

export default {
  info,
  warn,
  error
}
