'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const AuthMobileMenu = () => {
  const router = useRouter()
  return (
    <div className="flex flex-row items-center justify-start gap-1 text-zinc-900">
      <p className="cursor-pointer" onClick={() => router.push('/auth')}>
        Entrar
      </p>
      <p>|</p>
      <p className="cursor-pointer" onClick={() => router.push('/auth')}>
        Registrar
      </p>
    </div>
  )
}

export default AuthMobileMenu
