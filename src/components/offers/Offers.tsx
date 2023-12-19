'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

// import required modules
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules'
const Offers = () => {
  return (
    <div className="flex w-full flex-col rounded-md border-gray-300 bg-white md:border-[1px] lg:flex-row">
      <div className="flex w-full justify-between py-3 pl-4 pr-3 lg:w-fit lg:flex-col lg:justify-start lg:gap-4 lg:p-5">
        <div className="w-fit">
          <p className="text-lg font-semibold text-zinc-900">
            Deals and offers
          </p>
          <p className="text-[13px] text-neutral-600">Electronic equipments</p>
        </div>
        <div className="flex w-fit flex-row gap-1">
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400">
            <p className="font-semibold">13</p>
            <p className="text-[11px] ">Hour</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400">
            <p className="font-semibold">34</p>
            <p className="text-[11px] ">Min</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400">
            <p className="font-semibold">57</p>
            <p className="text-[11px] ">Sec</p>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={'auto'}
        direction={'horizontal'}
        mousewheel={true}
        freeMode={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Mousewheel, Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="h-fit max-w-[140px]">
          <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
            <img src="/images/cloth/7.png" alt="camisa" className="p-[7.4px]" />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[13px] text-zinc-900">Smart watches</p>
              <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
                <p className="text-sm text-red-600">-25%</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit max-w-[140px]">
          <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
            <img src="/images/tech/9.png" alt="camisa" className="p-[7.4px]" />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[13px] text-zinc-900">Smart watches</p>
              <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
                <p className="text-sm text-red-600">-25%</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit max-w-[140px]">
          <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
            <img src="/images/tech/7.png" alt="camisa" className="p-[7.4px]" />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[13px] text-zinc-900">Smart watches</p>
              <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
                <p className="text-sm text-red-600">-25%</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit max-w-[140px]">
          <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
            <img src="/images/tech/3.png" alt="camisa" className="p-[7.4px]" />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[13px] text-zinc-900">Smart watches</p>
              <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
                <p className="text-sm text-red-600">-25%</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit max-w-[140px]">
          <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
            <img src="/images/tech/2.png" alt="camisa" className="p-[7.4px]" />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[13px] text-zinc-900">Smart watches</p>
              <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
                <p className="text-sm text-red-600">-25%</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit max-w-[140px]">
          <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
            <img src="/images/tech/8.png" alt="camisa" className="p-[7.4px]" />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[13px] text-zinc-900">Smart watches</p>
              <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
                <p className="text-sm text-red-600">-25%</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Offers
