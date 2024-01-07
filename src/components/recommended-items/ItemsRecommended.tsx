'use client'

import { ProductProps } from '@/@types'
import React from 'react'
import ItemRecommended from './ItemRecommended'
import { useProducts } from '@/hooks/useProducts'
import { useFavorites } from '@/hooks/useFavorites'

const ItemsRecommended = () => {
  const products: ProductProps[] = useProducts((state) => state.products)
  const favorites = useFavorites((state) => state.favorites)

  const isFavorite = (product: ProductProps) => {
    return favorites.products.some((favorite) => favorite.code === product.code)
  }
  if (products.length > 1) {
    return (
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products &&
          products
            ?.filter((product: ProductProps) => product.featured === true)
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
    )
  }

  if (products.length === 0) {
    return (
      <div className=" grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="h-[251px] w-[186px] cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[160.4px] w-[160.4px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex h-[45.5px] flex-col">
            <div className="mb-1 h-[22px] w-[160.4px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[19.5px] w-[160.4px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemsRecommended
