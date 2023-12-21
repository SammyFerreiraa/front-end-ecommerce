'use client'

import React, { useEffect } from 'react'
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import OffersItem from './OffersItem'
import axios from 'axios'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import { useProducts } from '@/hooks/useProducts'
import { ProductProps } from '@/@types'

const SwiperOffers = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useProducts((state: any) => [
    state.products,
    state.setProducts,
  ])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/products')
      const data = res.data
      await setProducts(data)
    }
    fetchData()
  }, [setProducts])

  return (
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
      {products &&
        products
          .filter((product: ProductProps) => product.offer === true)
          .map((product: ProductProps) => (
            <SwiperSlide key={product.id} className="h-fit max-w-[140px]">
              <OffersItem
                name={product.name}
                discount={product.discount}
                image={product.image}
              />
            </SwiperSlide>
          ))}

      {products.length === 0 && (
        <div>
          <SwiperSlide className="h-fit max-w-[140px]">
            <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
              <div className="h-[119px] w-[115px] rounded-md bg-gray-300 p-[7.4px]"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-[19.5px] w-[98.5px] truncate rounded-md bg-gray-300 text-[13px] text-gray-900"></div>
                <div className="flex h-[28px] w-[56.8px] items-center justify-center rounded-3xl bg-red-100 px-3 py-1"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-fit max-w-[140px]">
            <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
              <div className="h-[119px] w-[115px] rounded-md bg-gray-300 p-[7.4px]"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-[19.5px] w-[98.5px] truncate rounded-md bg-gray-300 text-[13px] text-gray-900"></div>
                <div className="flex h-[28px] w-[56.8px] items-center justify-center rounded-3xl bg-red-100 px-3 py-1"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-fit max-w-[140px]">
            <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
              <div className="h-[119px] w-[115px] rounded-md bg-gray-300 p-[7.4px]"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-[19.5px] w-[98.5px] truncate rounded-md bg-gray-300 text-[13px] text-gray-900"></div>
                <div className="flex h-[28px] w-[56.8px] items-center justify-center rounded-3xl bg-red-100 px-3 py-1"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-fit max-w-[140px]">
            <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
              <div className="h-[119px] w-[115px] rounded-md bg-gray-300 p-[7.4px]"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-[19.5px] w-[98.5px] truncate rounded-md bg-gray-300 text-[13px] text-gray-900"></div>
                <div className="flex h-[28px] w-[56.8px] items-center justify-center rounded-3xl bg-red-100 px-3 py-1"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-fit max-w-[140px]">
            <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
              <div className="h-[119px] w-[115px] rounded-md bg-gray-300 p-[7.4px]"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-[19.5px] w-[98.5px] truncate rounded-md bg-gray-300 text-[13px] text-gray-900"></div>
                <div className="flex h-[28px] w-[56.8px] items-center justify-center rounded-3xl bg-red-100 px-3 py-1"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-fit max-w-[140px]">
            <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
              <div className="h-[119px] w-[115px] rounded-md bg-gray-300 p-[7.4px]"></div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-[19.5px] w-[98.5px] truncate rounded-md bg-gray-300 text-[13px] text-gray-900"></div>
                <div className="flex h-[28px] w-[56.8px] items-center justify-center rounded-3xl bg-red-100 px-3 py-1"></div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      )}
    </Swiper>
  )
}

export default SwiperOffers
