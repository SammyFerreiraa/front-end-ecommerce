'use client'

import { useFavorites } from '@/hooks/useFavorites'
import React from 'react'

const CartTitle = () => {
  const favorites = useFavorites((state) => state.favorites)
  return (
    <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
      Favoritos ({favorites.products.length})
    </h1>
  )
}

export default CartTitle
