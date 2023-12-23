'use client'

import React from 'react'

const AuthMobileMenu = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-1 text-zinc-900">
      <p
        className="cursor-pointer"
        onClick={() => (window.location.href = '/auth')}
      >
        Sign in
      </p>
      <p>|</p>
      <p
        className="cursor-pointer"
        onClick={() => (window.location.href = '/auth')}
      >
        Register
      </p>
    </div>
  )
}

export default AuthMobileMenu
