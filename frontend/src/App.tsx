import { Header, Info } from './containers'
import { Navbar } from './components'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/' // Base for HTTP Request

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Info />
      </div>
    </div>
  )
}

export default App
