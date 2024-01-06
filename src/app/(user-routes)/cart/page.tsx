import { MaxWidthWrapper } from '@/components'
import React from 'react'
import { CartTitle, Payment, ProductsCart } from '@/components/cart'

const Home = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="w-full bg-white px-4 py-4 shadow-md md:bg-transparent md:px-0 md:py-7 md:shadow-none">
        <CartTitle />
      </div>
      {/* shopping cart */}
      <div className="flex w-full flex-col md:gap-4 lg:flex-row">
        {/* Products section  */}
        <ProductsCart />
        <Payment />
      </div>
      <div className="hidden w-full flex-row items-center justify-start gap-14 bg-transparent py-8 lg:flex">
        <div className="flex flex-row gap-3">
          <img src="/images/icons/lock.png" alt="Icon" />
          <div className="flex flex-col">
            <p className="leading-normal text-zinc-900">Secure Payment</p>
            <p className="leading-normal text-zinc-400">
              Have you ever finally just
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <img src="/images/icons/chat.png" alt="Icon" />
          <div className="flex flex-col">
            <p className="leading-normal text-zinc-900">Customer support</p>
            <p className="leading-normal text-zinc-400">
              Have you ever finally just
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <img src="/images/icons/car.png" alt="Icon" />
          <div className="flex flex-col">
            <p className="leading-normal text-zinc-900">Free delivery</p>
            <p className="leading-normal text-zinc-400">
              Have you ever finally just
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Home
