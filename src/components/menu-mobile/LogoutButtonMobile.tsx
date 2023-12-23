import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

const LogoutButtonMobile = () => {
  return (
    <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => signOut()}>
      Sign out
    </Button>
  )
}

export default LogoutButtonMobile
