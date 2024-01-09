'use client'

import { useFavorites } from '@/hooks/useFavorites'
import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Button } from '../ui/button'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useCart } from '@/hooks/useCart'
import { ProductProps } from '@/@types'
import { LuHeartOff } from 'react-icons/lu'
import { MdOutlineShoppingCart } from 'react-icons/md'

const FavoritesProducts = () => {
  const { data: session } = useSession()
  const [cart, setCart] = useCart((state) => [state.cart, state.setCart])
  const [favorites, setFavorites, favoritesEmpty, setFavoritesEmpty] =
    useFavorites((state) => [
      state.favorites,
      state.setFavorites,
      state.favoritesEmpty,
      state.setFavoritesEmpty,
    ])

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!session?.token) return
      await axios
        .get('http://localhost:3000/profile', {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        })
        .then((res) => {
          setFavorites(res.data.favorites)
          if (res.data.favorites.products.length === 0) setFavoritesEmpty(true)
          if (res.data.favorites.products.length !== 0) setFavoritesEmpty(false)
        })
    }
    fetchFavorites()
  }, [session?.token, setFavorites, setFavoritesEmpty])

  const removeProduct = (code: string) => {
    const newFavorites = favorites.products.filter(
      (product) => product.code !== code,
    )
    setFavorites({ ...favorites, products: newFavorites })

    if (favorites.products.length === 1) setFavoritesEmpty(true)

    if (!session?.token) return
    const req = async () => {
      await axios.delete(`http://localhost:3000/favorites`, {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
        data: {
          productCode: code,
        },
      })
    }
    req()
  }

  const addToCart = (code: string, product: ProductProps) => {
    if (cart.products.find((p) => p.code === code)) return
    setCart({
      ...cart,
      products: [...cart.products, { ...product, code, quantity: 1 }],
    })

    setFavoritesEmpty(false)

    if (!session?.token) return
    const req = async () => {
      await axios.post(
        `http://localhost:3000/cart`,
        {
          productCode: code,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        },
      )
    }
    req()
  }
  return (
    <div className="flex w-full flex-col items-center justify-center lg:rounded-md lg:shadow-md">
      {favoritesEmpty && (
        <div className="flex h-80 w-full items-center justify-center gap-3 bg-white">
          <div className="flex flex-row items-center justify-center gap-3">
            <LuHeartOff className="text-2xl text-zinc-400 lg:text-5xl" />
            <p className="text-2xl text-zinc-400 lg:text-3xl ">
              Seus Favoritos estão vazios{' '}
            </p>
          </div>
        </div>
      )}
      {favorites.products.map((product) => (
        <div
          className="flex w-full flex-col gap-5  border-b border-neutral-300 bg-white p-4"
          key={product.code}
        >
          <div className="flex flex-row items-center justify-start gap-3">
            <div className="flex h-fit w-16 items-center justify-center rounded-md border border-neutral-300 bg-white p-1">
              <img src={product.image} alt={product.name} className="w-full" />
            </div>
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-col p-1">
                <h1 className="text-base text-zinc-900">{product.name}</h1>
                <p className="line-clamp-2 w-fit text-[13px] text-gray-400">
                  {product.description}
                </p>
              </div>
              <div className="flex cursor-pointer p-2 ">
                <BsThreeDotsVertical />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="hidden gap-3 lg:flex">
              <Button
                className="border border-gray-300 bg-transparent text-center text-[13px] font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => addToCart(product.code, product)}
              >
                <MdOutlineShoppingCart className="mr-1 h-4 w-4" />
                Carrinho
              </Button>
              <Button
                className="border border-gray-300 bg-transparent text-center text-[13px] font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                onClick={() => removeProduct(product.code)}
              >
                Remover
              </Button>
            </div>
            <div className="flex flex-row gap-2 rounded-md border-neutral-300 lg:hidden">
              <Button
                className="border border-zinc-300 bg-transparent text-center font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => addToCart(product.code, product)}
              >
                <MdOutlineShoppingCart className="mr-1 h-4 w-4" />
                Carrinho
              </Button>
              <Button
                className="border border-zinc-300 bg-transparent text-center font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                onClick={() => removeProduct(product.code)}
              >
                Remover
              </Button>
            </div>
            <p className="flex">
              {parseFloat(product.price.replace('R$ ', '')).toLocaleString(
                'pt-BR',
                {
                  style: 'currency',
                  currency: 'BRL',
                },
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavoritesProducts
