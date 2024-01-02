'use client'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useCart } from '@/hooks/useCart'

const ProductsCart = () => {
  const router = useRouter()
  const { data: session } = useSession({ required: true })
  const [cart, setCart] = useCart((state) => [state.cart, state.setCart])
  useEffect(() => {
    const setItems = async () => {
      await setCart(session?.user?.cart?.products || [])
    }
    setItems()
  }, [session?.user?.cart?.products, setCart])

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center lg:rounded-md lg:shadow-md">
        {/* produto */}
        {cart?.map((product) => (
          <div
            className="flex w-full flex-col gap-5  border-b border-neutral-300 bg-white p-4"
            key={product.code}
          >
            <div className="flex flex-row justify-start gap-3">
              <div className="h-fit w-16 rounded-md border border-neutral-300 bg-white p-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full"
                />
              </div>
              <div className="flex w-full flex-row justify-between">
                <div className="flex flex-col p-1">
                  <h1 className="text-base text-zinc-900">{product.name}</h1>
                  <p className="text-[13px] text-gray-400">
                    Size: medium, Color: blue
                  </p>
                  <p className="text-[13px] text-gray-400">
                    Seller: Artel Market
                  </p>
                </div>
                <div className="flex cursor-pointer p-2 lg:hidden">
                  <BsThreeDotsVertical />
                </div>
                <p className="hidden p-2 lg:flex">{product.price}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="hidden gap-3 lg:flex">
                <Button className="border border-gray-300 bg-transparent text-center text-[13px] font-medium text-red-600 hover:bg-red-600 hover:text-white">
                  Remove
                </Button>
                <Button
                  onClick={() => console.log(cart)}
                  className="border border-gray-300 bg-transparent text-center text-[13px] font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Save for Later
                </Button>
              </div>
              <div className="flex flex-row rounded-md border border-neutral-300 lg:hidden">
                <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                  <FaMinus />
                </div>
                <div className="flex items-center justify-center border-x border-neutral-300 px-4 py-2">
                  <p className="font-bold">{product.quantity}</p>
                </div>
                <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                  <FaPlus />
                </div>
              </div>
              <div>
                <Select value={product.quantity.toString()}>
                  <SelectTrigger className="mr-3 hidden shadow lg:flex">
                    Quant: {'  '}
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1" onClickCapture={() => console.log(1)}>
                      {'  '}1
                    </SelectItem>
                    <SelectItem value="2">{'  '}2</SelectItem>
                    <SelectItem value="3">{'  '}3</SelectItem>
                    <SelectItem value="4">{'  '}4</SelectItem>
                    <SelectItem value="5">{'  '}5</SelectItem>
                    <SelectItem value="6">{'  '}6</SelectItem>
                    <SelectItem value="7">{'  '}7</SelectItem>
                    <SelectItem value="8">{'  '}8</SelectItem>
                    <SelectItem value="9">{'  '}9</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="flex lg:hidden">{product.price}</p>
            </div>
          </div>
        ))}

        <div className="hidden w-full flex-row items-center justify-between bg-white p-5 lg:flex">
          <Button
            className="flex flex-row gap-3 bg-blue-600 text-base font-medium text-white hover:bg-white hover:text-blue-600"
            onClick={() => router.push('/')}
          >
            <ArrowLeftIcon />
            Back to shop
          </Button>
          <Button className="border border-gray-300 bg-transparent text-red-600 hover:bg-red-600 hover:text-white">
            Remove All
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCart
