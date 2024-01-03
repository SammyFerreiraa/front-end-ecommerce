import { nextAuthOption } from '@/app/api/auth/[...nextauth]/route'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import React from 'react'

const CartTitle = async () => {
  const session = await getServerSession(nextAuthOption)
  const res = await axios.get('http://localhost:3000/profile', {
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  })
  return (
    <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
      Shopping Cart ({res.data.cart.products.length})
    </h1>
  )
}

export default CartTitle
