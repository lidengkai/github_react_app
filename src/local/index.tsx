import './override'
import ReactDOM from 'react-dom'
import App from './App'
import '@/main'

const div = document.createElement('div')

document.body.appendChild(div)

ReactDOM.render(<App />, div)
