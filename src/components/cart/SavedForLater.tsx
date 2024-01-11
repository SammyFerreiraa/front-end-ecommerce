'use client'

import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Button } from '../ui/button'
import { useCart } from '@/hooks/useCart'
import { useFavorites } from '@/hooks/useFavorites'
import { ProductProps } from '@/@types'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { LuHeartOff } from 'react-icons/lu'

const SavedForLater = () => {
  const { data: session } = useSession()
  const [favorites, setFavorites, favoritesEmpty] = useFavorites((state) => [
    state.favorites,
    state.setFavorites,
    state.favoritesEmpty,
  ])
  const [cart, setCart, setEmpty] = useCart((state) => [
    state.cart,
    state.setCart,
    state.setEmpty,
  ])

  const removeToSaved = (code: string) => {
    const newFavorites = favorites.products.filter(
      (product) => product.code !== code,
    )
    setFavorites({ ...favorites, products: newFavorites })

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

    setEmpty(false)

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
    <div className="mt-5 flex w-full flex-col items-center gap-5 px-3 lg:rounded-md lg:bg-white lg:p-5">
      <h1 className="w-full text-left text-lg font-semibold text-zinc-900">
        Favoritos
      </h1>
      <div
        className={`grid w-full grid-cols-1 gap-2 md:grid-cols-1  lg:gap-5 ${
          favoritesEmpty ? 'lg:grid-cols-1' : 'lg:grid-cols-4'
        }`}
      >
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
            className="flex flex-row gap-3 rounded-md border-2 border-gray-300 bg-white p-2 lg:flex-col lg:rounded-none lg:border-none lg:p-0"
            key={product.code}
          >
            <div className="flex h-full max-h-[98px] w-fit min-w-[98px] items-center justify-center lg:max-h-none lg:w-full lg:px-5 lg:py-2">
              <img src={product.image} alt="mmm" className="h-full w-full" />
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <div className="flex w-full flex-col">
                {product.offer && (
                  <div className="flex flex-row items-center gap-2 truncate">
                    <p className="font-semibold text-green-600">
                      {(
                        Number(product.price) -
                        Number(product.price) * Number(product.discount)
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                    <p className="text-xs text-red-600 line-through">
                      {Number(product.price).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </div>
                )}
                {!product.offer && (
                  <p className="flex font-semibold">
                    {parseFloat(
                      product.price.replace('R$ ', ''),
                    ).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                )}
                <p className="hidden w-full text-sm text-zinc-600 lg:line-clamp-1">
                  {product.name}
                </p>

                <h1 className="line-clamp-1 text-sm text-neutral-600 lg:hidden">
                  {product.name}
                </h1>
                <p className="text-base font-semibold text-zinc-800 lg:hidden">
                  {Number(product.price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  className="flex flex-row items-center justify-center gap-1 border-2 border-zinc-300 bg-transparent text-center font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={() => addToCart(product.code, product)}
                >
                  <MdOutlineShoppingCart className="h-4 w-4" />
                  Carrinho
                </Button>
                <Button
                  className=" border-2 border-zinc-300 bg-transparent text-center font-semibold text-red-600 hover:bg-red-600 hover:text-white md:flex lg:hidden"
                  onClick={() => removeToSaved(product.code)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedForLater
