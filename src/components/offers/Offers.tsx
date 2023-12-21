import React from 'react'
import SwiperOffers from './SwiperOffers'

const Offers = async () => {
  return (
    <div className="flex w-full flex-col rounded-md border-gray-300 bg-white md:border-[1px] lg:flex-row">
      <div className="flex w-full justify-between py-3 pl-4 pr-3 lg:w-fit lg:flex-col lg:justify-start lg:gap-4 lg:p-5">
        <div className="w-fit">
          <p className="text-lg font-semibold text-zinc-900">
            Promoções e ofertas
          </p>
          <p className="text-[13px] text-neutral-600">Eletrônicos</p>
        </div>
        <div className="flex w-fit flex-row gap-1">
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400 lg:rounded lg:bg-zinc-600 lg:text-white">
            <p className="font-semibold">13</p>
            <p className="text-[11px] ">Horas</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400 lg:rounded lg:bg-zinc-600 lg:text-white">
            <p className="font-semibold">34</p>
            <p className="text-[11px] ">Min</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400 lg:rounded lg:bg-zinc-600 lg:text-white">
            <p className="font-semibold">57</p>
            <p className="text-[11px] ">Seg</p>
          </div>
        </div>
      </div>
      <SwiperOffers />
    </div>
  )
}

export default Offers
