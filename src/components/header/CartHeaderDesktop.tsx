'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { CartIcon } from '../icons'
import { useCart } from '@/hooks/useCart'
import axios from 'axios'
import { useSession } from 'next-auth/react'

const CartHeaderDesktop = () => {
  const router = useRouter()
  const cart = useCart((state) => state.cart)
  const setCart = useCart((state) => state.setCart)
  const { data: session } = useSession()

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.token) return
      await axios
        .get('http://localhost:3000/profile', {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        })
        .then((res) => {
          setCart(res.data.cart)
        })
    }
    fetchData()
  }, [session?.token, setCart])
  return (
    <div
      className="relative flex cursor-pointer flex-col items-center justify-between gap-1 hover:opacity-70"
      onClick={() => router.push('/cart')}
    >
      <CartIcon fill="#8B96A5" />
      {session?.token && (
        <div className="absolute -right-0.5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          {cart?.products?.length}
        </div>
      )}
      <p className="text-xs text-gray-400 ">Carrinho</p>
    </div>
  )
}

export default CartHeaderDesktop
