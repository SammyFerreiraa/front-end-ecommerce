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
import axios from 'axios'

const ProductsCart = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [cart, setCart, setQuantity, removeProduct] = useCart((state) => [
    state.cart,
    state.setCart,
    state.setQuantity,
    state.removeProduct,
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!session?.token) return
        const response = await axios.get('http://localhost:3000/profile', {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        })
        setCart(response.data.cart)
      } catch (error) {
        console.error('Erro na solicitação:', error)
      }
    }
    fetchData()
  }, [session?.token, setCart])

  const changeQuantity = async (productCode: string, quantity: number) => {
    setQuantity(productCode, quantity)
    if (!session?.token) return
    await axios.post(
      `http://localhost:3000/cart/updatequantity`,
      {
        quantity,
        productCode,
      },
      {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      },
    )
  }

  const removeItemFromCart = async (productCode: string) => {
    removeProduct(productCode)
    if (!session?.token) return
    await axios.delete(`http://localhost:3000/cart/removeitem`, {
      headers: {
        Authorization: `Bearer ${session?.token}`,
      },
      data: {
        productCode,
      },
    })
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center lg:rounded-md lg:shadow-md">
        {/* produto */}
        {cart.products.map((product) => (
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
                <Button
                  className="border border-gray-300 bg-transparent text-center text-[13px] font-medium text-red-600 hover:bg-red-600 hover:text-white"
                  onClick={() => removeItemFromCart(product.code)}
                >
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
                <Select
                  value={product.quantity.toString()}
                  onValueChange={(value) =>
                    changeQuantity(product.code, parseInt(value))
                  }
                >
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
                    <SelectItem value="10">{'  '}10</SelectItem>
                    <SelectItem value="11">{'  '}11</SelectItem>
                    <SelectItem value="12">{'  '}12</SelectItem>
                    <SelectItem value="13">{'  '}13</SelectItem>
                    <SelectItem value="14">{'  '}14</SelectItem>
                    <SelectItem value="15">{'  '}15</SelectItem>
                    <SelectItem value="16">{'  '}16</SelectItem>
                    <SelectItem value="17">{'  '}17</SelectItem>
                    <SelectItem value="18">{'  '}18</SelectItem>
                    <SelectItem value="19">{'  '}19</SelectItem>
                    <SelectItem value="20">{'  '}20</SelectItem>
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
