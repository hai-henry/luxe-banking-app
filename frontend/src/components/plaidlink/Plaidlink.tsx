import axios from 'axios'
import React, { useEffect, useCallback, useState } from 'react'

import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnSuccessMetadata,
} from 'react-plaid-link'

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

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  )
}

export default SimplePlaidLink
