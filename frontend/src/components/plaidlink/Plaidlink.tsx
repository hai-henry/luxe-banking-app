import React, { useEffect, useCallback, useState } from 'react'
import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnSuccessMetadata,
} from 'react-plaid-link'
import axios from 'axios'

// FIXME: Access Token is not being returned
function GetAccessToken({ publicToken }: { publicToken: string }) {
  useEffect(() => {
    async function fetchAccessToken() {
      try {
        const response = await axios.post('/api/exchange_public_token', {
          public_token: publicToken, // Ensure the property name matches 'public_token'
        })
        console.log(response.data)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    fetchAccessToken()
  }, [publicToken])

  return <span>Public Token: {publicToken}</span>
}

const SimplePlaidLink = () => {
  const [linkToken, setLinkToken] = useState<string | undefined>()
  const [publicToken, setPublicToken] = useState<string | undefined>()

  useEffect(() => {
    async function fetchLinkToken() {
      const response = await axios.post('/api/create_link_token')
      setLinkToken(response.data.link_token)
    }
    fetchLinkToken()
  }, [])

  const { open, ready } = usePlaidLink({
    token: linkToken!,
    onSuccess: (publicToken, metadata) => {
      setPublicToken(publicToken)
      console.log('public_token: ', publicToken, metadata)
    },
  })

  return publicToken ? (
    <GetAccessToken publicToken={publicToken} />
  ) : (
    <button onClick={() => open()} disabled={!ready}>
      Link
    </button>
  )
}

export default SimplePlaidLink
