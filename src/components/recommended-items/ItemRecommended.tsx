'use client'

import { ItemRecommendedProps } from '@/@types'
import { useFavorites } from '@/hooks/useFavorites'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { toast } from 'react-toastify'

const ItemRecommended = ({
  name,
  image,
  favorite,
  product,
}: ItemRecommendedProps) => {
  const router = useRouter()
  const [addProduct, removeProduct] = useFavorites((state) => [
    state.addProduct,
    state.removeProduct,
  ])
  const { data: session } = useSession()

  const addFavorites = () => {
    addProduct(product)
    toast.success('Adicionado aos favoritos', {
      pauseOnHover: false,
      theme: 'colored',
    })

    const req = async () => {
      const url = process.env.NEXT_PUBLIC_FAVORITES || ''
      await axios.post(
        url,
        {
          productCode: product.code,
        },
        { headers: { Authorization: `Bearer ${session?.token}` } },
      )
    }
    req()
  }

  const removeFavorites = () => {
    removeProduct(product.code)
    toast.info('Removido dos favoritos')

    const urlFavorites = process.env.NEXT_PUBLIC_FAVORITES || ''
    const req = async () => {
      await axios.delete(urlFavorites, {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
        data: {
          productCode: product.code,
        },
      })
    }
    req()
  }
  return (
    <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
      <div
        className="flex items-center justify-center p-3"
        onClick={() =>
          router.push(`/products/${product.category}/${product.code}`)
        }
      >
        <img src={image} alt="camisa" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between">
          <div
            className="flex flex-col items-start justify-center gap-1"
            onClick={() =>
              router.push(`/products/${product.category}/${product.code}`)
            }
          >
            {product.offer && (
              <div className="flex flex-col items-start truncate">
                <p className="text-sm font-semibold text-green-600">
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
                {parseFloat(product.price.replace('R$ ', '')).toLocaleString(
                  'pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  },
                )}
              </p>
            )}
            <div className="flex flex-row items-center gap-1.5">
              <img src="/images/rating/4.png" alt="4" className="w-16" />
              <p className="text-sm text-amber-500">4.0</p>
            </div>
          </div>
          {!favorite && session?.token && (
            <div
              className="flex h-fit w-fit items-center justify-center rounded-md border-2 border-gray-300 hover:border-gray-200 hover:bg-gray-200 hover:text-red-600"
              onClick={() => addFavorites()}
            >
              <IoMdHeartEmpty className="m-2 h-5 w-5 text-blue-600" />
            </div>
          )}
          {favorite && session?.token && (
            <div
              className="flex h-fit w-fit items-center justify-center rounded-md border-2 border-gray-300 text-red-600 hover:border-gray-200 hover:bg-gray-200"
              onClick={() => removeFavorites()}
            >
              <IoMdHeart className="m-2 h-5 w-5 text-red-600 hover:text-inherit" />
            </div>
          )}
        </div>
        <p
          className="line-clamp-2 text-[13px] text-gray-400"
          onClick={() =>
            router.push(`/products/${product.category}/${product.code}`)
          }
        >
          {name}
        </p>
      </div>
    </div>
  )
}

export default ItemRecommended
