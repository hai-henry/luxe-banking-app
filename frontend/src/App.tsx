import { useEffect } from 'react'
import { Header, Info } from './containers'
import { Navbar } from './components'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/' // Base for HTTP Request

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('/api/create_link_token')
        console.log('Response: ', response.data)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    fetchData()
  }, [])

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
