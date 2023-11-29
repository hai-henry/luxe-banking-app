// APP COMPONENT
// Upon rendering of App component, make a request to create and
// obtain a link token to be used in the Link component
import React, { useEffect, useState } from 'react'
import { usePlaidLink } from 'react-plaid-link'

// TODO: Get linking button to show and work
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
// LINK COMPONENT
// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link
interface LinkProps {
  linkToken: string | null
}

type public_token = string
type metadata = any
const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const onSuccess = React.useCallback(
    (publicToken: public_token, metaData: metadata) => {
      // send public_token to server
      const response = fetch('/api/set_access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicToken }),
      })
      // Handle response ...
    },
    [],
  )
  const config: Parameters<typeof usePlaidLink>[0] = {
    token: props.linkToken!,
    onSuccess,
  }
  const { open, ready } = usePlaidLink(config)
  return (
    <button onClick={() => open()} disabled={!ready}>
      Link account
    </button>
  )
}
export default App
