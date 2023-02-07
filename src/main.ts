import './styles/index.scss'
import Header from './components/Header'
import Main from './components/Main'

const App = document.querySelector<HTMLElement>('#app');

document.addEventListener('DOMContentLoaded', async () => {
  App?.append(Header(), await Main())
})
