import { ItemRecommendedProps } from '@/@types'
import React from 'react'

const ItemRecommended = ({ name, image, price }: ItemRecommendedProps) => {
  return (
    <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
      <div className="flex items-center justify-center p-3">
        <img src={image} alt="camisa" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-1">
            <p className="font-medium leading-snug text-zinc-900">
              R$ {'   '}
              {price}
            </p>
            <div className="flex flex-row items-center gap-1.5">
              <img src="/images/rating/4.png" alt="4" className="w-16" />
              <p className="text-sm text-amber-500">4.0</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md border-2 border-gray-300 p-2">
            <img
              src="/images/icons/favorite_border.png"
              alt="fav"
              className="h-5 w-5"
            />
          </div>
        </div>
        <p className="line-clamp-2 text-[13px] text-gray-400">{name}</p>
      </div>
    </div>
  )
}

export default ItemRecommended
