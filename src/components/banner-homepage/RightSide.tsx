'use client'

import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

type RightSideProps = {
  name: string | null | undefined
}

const RightSide = ({ name }: RightSideProps) => {
  return (
    <div className="hidden h-auto max-w-[200px] flex-col items-center justify-between md:flex md:gap-2 md:text-sm xl:gap-0">
      <div className="flex w-full flex-col justify-between gap-3 rounded-md bg-sky-100 p-3 text-sm">
        <div className="flex w-full flex-row items-center gap-2">
          <img src="/assets/Avatar.png" className="h-10 w-10" alt="Avatar" />
          <p className="line-clamp-1 text-sm font-bold">{name}</p>
          {!name && <p className="text">Oi, vamos começar </p>}
        </div>
        {!name && (
          <>
            <Button
              onClick={() => {
                window.location.href = '/auth'
              }}
              className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600"
            >
              Entrar
            </Button>
            <Button
              onClick={() => {
                window.location.href = '/auth/register'
              }}
              className="w-full rounded-md bg-white py-2 text-blue-600 hover:bg-blue-600  hover:text-white"
            >
              Registrar
            </Button>
          </>
        )}
        {name && (
          <Button
            onClick={() => {
              signOut({ callbackUrl: '/auth' })
            }}
            className="mt-4 w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600"
          >
            Desconectar
          </Button>
        )}
      </div>
      {name && (
        <div className="w-full rounded-md bg-red-500 p-4 text-white">
          <p>15% de cashback</p>
        </div>
      )}
      <div className="w-full rounded-md bg-orange-500 p-4 text-white">
        <p>Ganhe US$ 10 de desconto</p>
      </div>
      <div className="w-full rounded-md bg-teal-400 p-4 text-white">
        <p>Frete Gratis na primeira compra</p>
      </div>
    </div>
  )
}

export default RightSide
