'use client'

import { ProductProps } from '@/@types'
import { MaxWidthWrapper } from '@/components'
import ItemRecommended from '@/components/recommended-items/ItemRecommended'
import { useFavorites } from '@/hooks'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GoTools } from 'react-icons/go'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { LiaBookSolid } from 'react-icons/lia'
import { MdOutlineBedroomChild, MdOutlineSportsFootball } from 'react-icons/md'
import { PiTShirtBold } from 'react-icons/pi'

const Home = ({ params }: { params: { category: string } }) => {
  const category = params.category
  const [products, setProducts] = useState<ProductProps[]>([])
  const favorites = useFavorites((state) => state.favorites)
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      const url = process.env.NEXT_PUBLIC_CATEGORY || ''
      await axios
        .post(url, {
          category,
        })
        .then((response) => {
          setProducts(response.data)
        })
    }
    fetchProducts()
  })

  const isFavorite = (product: ProductProps) => {
    return favorites.products.some((favorite) => favorite.code === product.code)
  }
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="w-full">
        <div className="my-4 hidden flex-row items-center gap-1.5 text-gray-400 md:flex">
          <p
            className="cursor-pointer capitalize"
            onClick={() => router.push('/')}
          >
            Home
          </p>
          <ChevronRightIcon />
          <p
            className="cursor-pointer capitalize"
            onClick={() => router.push('/products')}
          >
            Produtos
          </p>
          <ChevronRightIcon />
          <p className="cursor-pointer capitalize">{category}</p>
        </div>
        <div className="m-2.5 mt-5 grid grid-cols-3 justify-between gap-3 md:m-0 md:mt-0 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <div
            className="flex cursor-pointer flex-col gap-2.5 rounded-md border border-gray-300 bg-white p-4 text-gray-900"
            onClick={() => router.push('/products/tecnologia')}
          >
            <HiOutlineDesktopComputer className="h-5 w-5" />
            <p>Tecnologia</p>
          </div>
          <div
            className="flex cursor-pointer flex-col gap-2.5 rounded-md border border-gray-300 bg-white p-4 text-gray-900"
            onClick={() => router.push('/products/interior')}
          >
            <MdOutlineBedroomChild className="h-5 w-5" />
            <p>Interior</p>
          </div>
          <div
            className="flex cursor-pointer flex-col gap-2.5 rounded-md border border-gray-300 bg-white p-4 text-gray-900"
            onClick={() => router.push('/products/roupas')}
          >
            <PiTShirtBold className="h-5 w-5" />
            <p>Roupas</p>
          </div>
          <div
            className="flex cursor-pointer flex-col gap-2.5 rounded-md border border-gray-300 bg-white p-4 text-gray-900"
            onClick={() => router.push('/products/livros')}
          >
            <LiaBookSolid className="h-5 w-5" />
            <p>Livros</p>
          </div>
          <div
            className="flex cursor-pointer flex-col gap-2.5 rounded-md border border-gray-300 bg-white p-4 text-gray-900"
            onClick={() => router.push('/products/esporte')}
          >
            <MdOutlineSportsFootball className="h-5 w-5" />
            <p>Esporte</p>
          </div>
          <div
            className="flex cursor-pointer flex-col gap-2.5 rounded-md border border-gray-300 bg-white p-4 text-gray-900"
            onClick={() => router.push('/products/ferramentas')}
          >
            <GoTools className="h-5 w-5" />
            <p>Ferramentas</p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 p-2.5 md:p-0">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900">
              {products.length} Produtos Encontrados
            </h1>
            <p
              className="cursor-pointer text-blue-600"
              onClick={() => router.push('/products')}
            >
              Limpar Filtro
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {products &&
              products
                ?.filter(
                  (product: ProductProps) => product.category === category,
                )
                .map((product: ProductProps) => (
                  <React.Fragment key={product.id}>
                    {isFavorite(product) && (
                      <ItemRecommended
                        product={product}
                        favorite={true}
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                      />
                    )}
                    {!isFavorite(product) && (
                      <ItemRecommended
                        product={product}
                        favorite={false}
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                      />
                    )}
                  </React.Fragment>
                ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Home
