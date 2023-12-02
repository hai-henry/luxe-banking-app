// APP COMPONENT
// Upon rendering of App component, make a request to create and
// obtain a link token to be used in the Link component
import React, { useEffect, useState } from 'react'
import Link from './Link'

const App = () => {
  const [linkToken, setLinkToken] = useState(null)
  const generateToken = async () => {
    const response = await fetch('/api/create_link_token', {
      method: 'POST',
    })
    const data = await response.json()
    setLinkToken(data.link_token)
  }
  useEffect(() => {
    generateToken()
  }, [])
  return linkToken != null ? <Link linkToken={linkToken} /> : <></>
}

export default App
