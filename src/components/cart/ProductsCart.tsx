'use client'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { TbShoppingCartExclamation } from 'react-icons/tb'
import axios from 'axios'
import LoadingProduct from './LoadingProduct'
import { useCart, useFavorites, useProductsCart } from '@/hooks'

const ProductsCart = () => {
  const [loading, setLoading] = useState(true)
  const [expired, setExpired] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()
  const [favorites, addProduct, setFavoritesEmpty] = useFavorites((state) => [
    state.favorites,
    state.addProduct,
    state.setFavoritesEmpty,
  ])
  const [
    cart,
    setCart,
    setQuantity,
    removeProduct,
    removeAllProducts,
    empty,
    setEmpty,
  ] = useCart((state) => [
    state.cart,
    state.setCart,
    state.setQuantity,
    state.removeProduct,
    state.removeAllProducts,
    state.empty,
    state.setEmpty,
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!session?.token) return
        const urlProfile = process.env.NEXT_PUBLIC_PROFILE || ''
        await axios
          .get(urlProfile, {
            headers: {
              Authorization: `Bearer ${session?.token}`,
            },
          })
          .then((res) => {
            setCart(res.data.cart)
            if (res.data.cart.products.length === 0) setEmpty(true)
            if (res.data.cart.products.length !== 0) setEmpty(false)
            if (res.data.favorites.products.length === 0)
              setFavoritesEmpty(true)
            if (res.data.favorites.products.length !== 0)
              setFavoritesEmpty(false)
          })
        setLoading(false)
      } catch (error) {
        setExpired(true)
        console.error('Erro na solicitação:', error)
      }
    }
    fetchData()
  }, [session?.token, setCart, setEmpty, setFavoritesEmpty])

  const {
    changeQuantity,
    removeItemFromCart,
    removeOne,
    addOne,
    clearCart,
    saveForLater,
  } = useProductsCart(
    cart,
    favorites,
    session?.token,
    setQuantity,
    removeProduct,
    setEmpty,
    removeAllProducts,
    addProduct,
    setFavoritesEmpty,
  )

  return (
    <div className="w-full lg:rounded-md">
      {loading === false && (
        <div className="flex flex-col items-center justify-center bg-white md:rounded-md lg:shadow-md">
          {/* produto */}
          {empty && (
            <div className="flex h-80 w-full items-center justify-center gap-3 bg-white md:rounded-md">
              <TbShoppingCartExclamation className="text-2xl text-zinc-400 lg:text-5xl" />
              <p className="text-2xl text-zinc-400 lg:text-3xl">
                Seu carrinho está vazio{' '}
              </p>
            </div>
          )}
          {cart.products.map((product) => (
            <div
              className="flex w-full flex-col gap-5  border-b border-neutral-300 p-4"
              key={product.code}
            >
              <div className="flex flex-row items-center justify-start gap-3">
                <div className="flex h-fit w-16 items-center justify-center rounded-md border border-neutral-300 p-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full  cursor-pointer"
                    onClick={() =>
                      router.push(
                        `/products/${product.category}/${product.code}`,
                      )
                    }
                  />
                </div>
                <div className="flex w-full flex-row justify-between">
                  <div className="flex flex-col p-1">
                    <h1
                      className="cursor-pointer text-base text-zinc-900"
                      onClick={() =>
                        router.push(
                          `/products/${product.category}/${product.code}`,
                        )
                      }
                    >
                      {product.name}
                    </h1>
                    <p
                      className="w-fit cursor-pointer text-[13px] text-gray-400"
                      onClick={() =>
                        router.push(
                          `/products/${product.category}/${product.code}`,
                        )
                      }
                    >
                      Size: medium, Color: blue
                    </p>
                    <p
                      className="w-fit cursor-pointer text-[13px] text-gray-400"
                      onClick={() =>
                        router.push(
                          `/products/${product.category}/${product.code}`,
                        )
                      }
                    >
                      Seller: Artel Market
                    </p>
                  </div>
                  <div className="flex cursor-pointer p-2 lg:hidden">
                    <BsThreeDotsVertical />
                  </div>
                  {product.offer && (
                    <div className="hidden h-fit flex-row items-center gap-2 lg:flex">
                      <p className="text-xs text-red-600 line-through">
                        {(
                          Number(product.price) * product.quantity
                        ).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                      <p className="font-semibold text-green-600">
                        {(
                          (Number(product.price) -
                            Number(product.price) * Number(product.discount)) *
                          product.quantity
                        ).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                    </div>
                  )}
                  {!product.offer && (
                    <p className="hidden font-semibold lg:flex">
                      {(
                        parseFloat(product.price.replace('R$ ', '')) *
                        product.quantity
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="hidden gap-3 lg:flex">
                  <Button
                    className="border border-gray-300 bg-transparent text-center text-[13px] font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                    onClick={() => removeItemFromCart(product.code)}
                  >
                    Remover
                  </Button>
                  <Button
                    onClick={() =>
                      saveForLater(
                        product.code,
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        cart.products.find((p) => p.code === product.code)!,
                      )
                    }
                    className="border border-gray-300 bg-transparent text-center text-[13px] font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Salvar nos Favoritos
                  </Button>
                </div>
                <div className="flex flex-row rounded-md border border-neutral-300 lg:hidden">
                  <div
                    className="flex cursor-pointer items-center justify-center p-2 px-3"
                    onClick={() => removeOne(product.code, cart.id)}
                  >
                    <FaMinus />
                  </div>
                  <div className="flex items-center justify-center border-x border-neutral-300 px-4 py-2">
                    <p className="font-bold">{product.quantity}</p>
                  </div>
                  <div
                    className="flex cursor-pointer items-center justify-center p-2 px-3"
                    onClick={() => addOne(product.code)}
                  >
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
                      <SelectItem value="1">{'  '}1</SelectItem>
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
                {product.offer && (
                  <div className="flex flex-row items-center gap-2 lg:hidden">
                    <p className="text-xs text-red-600 line-through">
                      {(
                        Number(product.price) * product.quantity
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                    <p className="font-semibold text-green-600">
                      {(
                        (Number(product.price) -
                          Number(product.price) * Number(product.discount)) *
                        product.quantity
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </div>
                )}
                {!product.offer && (
                  <p className="flex font-semibold lg:hidden">
                    {(
                      parseFloat(product.price.replace('R$ ', '')) *
                      product.quantity
                    ).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                )}
              </div>
            </div>
          ))}

          <div className="hidden w-full flex-row items-center justify-between rounded-b-md bg-white p-5 lg:flex">
            <Button
              className="flex flex-row gap-3 bg-blue-600 text-base font-semibold text-white hover:bg-white hover:text-blue-600"
              onClick={() => router.push('/')}
            >
              <ArrowLeftIcon />
              Voltar pro Shop
            </Button>
            <Button
              className="border border-gray-300 bg-transparent font-semibold text-red-600 hover:bg-red-600 hover:text-white"
              onClick={() => clearCart()}
              disabled={empty}
            >
              Remover tudo
            </Button>
          </div>
        </div>
      )}

      {loading === true && <LoadingProduct />}
      {expired && (
        <div>
          <p>Login Expirado</p>
          <Button onClick={() => signOut()}>Reconectar</Button>
        </div>
      )}
    </div>
  )
}

export default ProductsCart
