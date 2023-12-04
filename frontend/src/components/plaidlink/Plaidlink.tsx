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
      const response = await axios.post('/api/exchange_public_token', {
        public_Token: publicToken,
      })
      console.log(response.data)
    }
    fetchAccessToken()
  }, [])
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
    onSuccess: (public_Token, metadata) => {
      setPublicToken(public_Token)
      console.log('public_token: ', public_Token, metadata)
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
