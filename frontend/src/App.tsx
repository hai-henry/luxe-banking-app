import { useEffect } from 'react'
import { Header, Info } from './containers'
import { Navbar } from './components'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/' // Base for HTTP Request

// TODO: Get Accounts using access token
function GetAccounts({ publicToken }: { publicToken: string }) {
  useEffect(() => {
    async function fetchAccessToken() {
      try {
        const accessToken = await axios.post('/api/exchange_public_token', {
          public_token: publicToken, // Ensure the property name matches 'public_token'
        })

        console.log('Access Token huh: ', accessToken)
        const accounts = await axios.post('/api/accounts', {
          accessToken: accessToken.data.access_token,
        })

        console.log('Accounts: ', accounts.data)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    fetchAccessToken()
  }, [])

  return <></>
}

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Info />
        <GetAccounts publicToken="public-sandbox-4b9b9b9b-7b9b-4b9b-9b9b-9b9b9b9b9b9b" />
      </div>
    </div>
  )
}

export default App
