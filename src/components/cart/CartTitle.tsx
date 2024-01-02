import { nextAuthOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import React from 'react'

const CartTitle = async () => {
  const session = await getServerSession(nextAuthOption)
  return (
    <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
      Shopping Cart ({session?.user?.cart?.products?.length})
    </h1>
  )
}

export default CartTitle
