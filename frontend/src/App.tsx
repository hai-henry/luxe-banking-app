import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header, Info } from './containers'
import { Navbar } from './components'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/'

function App() {
  // TODO: Link backend to frontend
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.post('/helloworld')
        console.log('Response: ', response.data)
      } catch (error) {
        console.log('Error: ', error)
      }
    }
    fetch()
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
