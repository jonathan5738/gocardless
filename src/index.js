import react from 'react' 
import ReactDOM from 'react-dom/client' 
import App from './components/App'
const container = document.querySelector('#root')
const rooter = ReactDOM.createRoot(container)

rooter.render(<App/>)