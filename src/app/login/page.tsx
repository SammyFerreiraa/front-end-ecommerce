'use client'

import { signIn } from 'next-auth/react'
import React, { useCallback, useState } from 'react'

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (res?.error) {
        return
      }
      window.location.href = '/'
    },
    [email, password],
  )

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        id="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        id="password"
      />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Home
