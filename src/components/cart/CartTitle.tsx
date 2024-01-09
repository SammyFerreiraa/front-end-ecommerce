'use client'

import { useCart } from '@/hooks/useCart'
import React from 'react'

const CartTitle = () => {
  const cart = useCart((state) => state.cart)
  return (
    <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
      Carrinho ({cart.products.length})
    </h1>
  )
}

export default CartTitle
