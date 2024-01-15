'use client'

import { ProductProps } from '@/@types'
import { MaxWidthWrapper } from '@/components'
import ItemRecommended from '@/components/recommended-items/ItemRecommended'
import { useFavorites } from '@/hooks'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = ({ params }: { params: { category: string; name: string } }) => {
  const { category, name } = params
  const [products, setProducts] = useState<ProductProps[]>([])
  const favorites = useFavorites((state) => state.favorites)

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .post('http://localhost:3000/category', {
          category,
        })
        .then((response) => {
          setProducts(response.data)
        })
    }
    fetchProducts()
  }, [category, name])

  const isFavorite = (product: ProductProps) => {
    return favorites.products.some((favorite) => favorite.code === product.code)
  }

  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="flex w-full flex-col gap-3 p-2.5 md:p-0">
        <div className="my-5 flex flex-row items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">
            {
              products.filter((product) =>
                product.name
                  .toLowerCase()
                  .replaceAll(' ', '')
                  .includes(name.toLowerCase().replaceAll('%20', '')),
              ).length
            }{' '}
            Produtos Encontrados
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {products &&
            products
              .filter((product) =>
                product.name
                  .toLowerCase()
                  .replaceAll(' ', '')
                  .includes(name.toLowerCase().replaceAll('%20', '')),
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
    </MaxWidthWrapper>
  )
}

export default Home
