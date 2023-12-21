import { OffersItemProps } from '@/@types'
import React from 'react'

const OffersItem = ({ name, discount, image }: OffersItemProps) => {
  return (
    <div className="flex h-fit max-w-[140px] cursor-pointer flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
      <img src={image} alt={name} className="h-[119px] p-[7.4px]" />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="max-w-[115px] truncate text-[13px] text-zinc-900">
          {name}
        </p>
        <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
          <p className="text-sm text-red-600">-{parseFloat(discount) * 100}%</p>
        </div>
      </div>
    </div>
  )
}

export default OffersItem
