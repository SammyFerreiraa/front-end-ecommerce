import { ItemRecommendedProps } from '@/@types'
import React from 'react'

const ItemRecommended = ({ name, image, price }: ItemRecommendedProps) => {
  return (
    <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
      <div className="flex items-center justify-center p-3">
        <img src={image} alt="camisa" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium leading-snug text-zinc-900">{price}</p>
        <p className="line-clamp-2 text-[13px] text-gray-400">{name}</p>
      </div>
    </div>
  )
}

export default ItemRecommended
