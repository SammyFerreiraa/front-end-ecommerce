import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { ProductsCart } from '@/components/cart'

const Home = async () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="w-full bg-white px-4 py-4 shadow-md md:bg-transparent md:px-0 md:py-7 md:shadow-none">
        <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
          Shopping Cart (3)
        </h1>
      </div>
      {/* shopping cart */}
      <div className="flex w-full flex-col md:gap-4 lg:flex-row">
        {/* Products section  */}
        <ProductsCart />
        <div className="flex h-fit flex-col items-center justify-start gap-3">
          <div className="hidden flex-col gap-2 rounded-md bg-white p-5 lg:flex lg:shadow-md">
            <p className="text-base font-normal text-neutral-600">
              Have a coupon?
            </p>
            <div className="flex flex-row items-center justify-center">
              <Input
                placeholder="Add coupon"
                className="rounded-r-none py-3 placeholder:text-gray-400"
              />
              <Button className="rounded-l-none border border-gray-300 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white">
                Apply
              </Button>
            </div>
          </div>
          <div className="w-full rounded-md bg-white p-4 py-5 lg:w-[280px] lg:shadow-md">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-between ">
                <p className="text-gray-400">Subtotal:</p>
                <p className="text-right font-medium text-zinc-900">
                  R$ 320,00
                </p>
              </div>
              <div className="flex flex-row items-center justify-between ">
                <p className="text-gray-400">Discount:</p>
                <p className="text-right font-medium text-red-600">
                  <span>- {'   '}</span>R$ 110,00
                </p>
              </div>
              <div className="flex flex-row items-center justify-between ">
                <p className="text-gray-400">Tax:</p>
                <p className="text-right font-medium text-green-600">
                  <span>+ {'   '}</span>R$ 10,00
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between">
                <p className="text-right text-lg font-semibold text-zinc-900">
                  Total:
                </p>
                <p className="text-right text-lg font-semibold text-zinc-900">
                  R$220,00
                </p>
              </div>
              <Button className="w-full bg-green-600 py-5 text-center text-base font-medium text-white hover:bg-green-700">
                Checkout <span className="ml-1 lg:hidden">(3 items)</span>
              </Button>
            </div>
            <div className="mt-6 flex w-full flex-row items-center justify-center gap-2">
              <img src="/images/cards/amex.png" alt="Amex" />
              <img src="/images/cards/applepay.png" alt="" />
              <img src="/images/cards/mastercard.png" alt="" />
              <img src="/images/cards/pp.png" alt="" />
              <img src="/images/cards/visa.png" alt="" />
            </div>
          </div>
        </div>
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
