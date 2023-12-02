// LINK COMPONENT
// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link

import React, { useCallback } from 'react'
import { PlaidLinkOnSuccessMetadata, usePlaidLink } from 'react-plaid-link'

interface LinkProps {
  linkToken: string | null
}

const LinkPlaid: React.FC<LinkProps> = (props: LinkProps) => {
  const onSuccess = useCallback(
    async (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
      // send public_token to server
      const response = await fetch('/api/set_access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ public_token }),
      })
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
export default LinkPlaid
