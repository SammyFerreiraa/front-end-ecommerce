'use client'

import { ProductProps } from '@/@types'
import React from 'react'
import ItemRecommended from './ItemRecommended'
import { useProducts } from '@/hooks/useProducts'

const ItemsRecommended = () => {
  const products: ProductProps[] = useProducts((state) => state.products)
  if (products.length > 1) {
    return (
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products &&
          products
            ?.filter((product: ProductProps) => product.featured === true)
            .map((product: ProductProps) => (
              <ItemRecommended
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className=" grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="mb-2 flex h-[147.2px] w-[147.2px] items-center justify-center rounded-md bg-gray-300 p-3"></div>
          <div className="flex flex-col gap-1">
            <div className="mb-1 h-[22px] w-[147.2px] rounded-md bg-gray-300  font-medium leading-snug text-zinc-900"></div>
            <div className="line-clamp-2 h-[39px] w-[147.2px] rounded-md bg-gray-300 text-[13px] text-gray-400"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemsRecommended
