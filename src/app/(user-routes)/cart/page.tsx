import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const Home = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="w-full bg-white px-4 py-4 shadow-md md:bg-transparent md:px-0 md:py-7 md:shadow-none">
        <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
          Shopping Cart (3)
        </h1>
      </div>
      {/* shopping cart */}
      <div className="flex w-full flex-col md:gap-4 lg:flex-row">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            {/* produto */}
            <div className="flex w-full flex-col gap-5  border-b border-neutral-300 bg-white p-4">
              <div className="flex flex-row justify-start gap-3">
                <div className="h-fit w-16 rounded-md border border-neutral-300 bg-white p-1">
                  <img
                    src="/images/cloth/1.png"
                    alt="produto"
                    className="w-full"
                  />
                </div>
                <div className="flex w-full flex-row justify-between">
                  <div className="flex flex-col p-1">
                    <h1 className="text-base text-zinc-900">
                      T-shirts with multiple colors for men
                    </h1>
                    <p className="text-[13px] text-gray-400">
                      Size: medium, Color: blue
                    </p>
                    <p className="text-[13px] text-gray-400">
                      Seller: Artel Market
                    </p>
                  </div>
                  <div className="cursor-pointer p-2 ">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row rounded-md border border-neutral-300">
                  <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                    <FaMinus />
                  </div>
                  <div className="flex items-center justify-center border-x border-neutral-300 px-4 py-2">
                    <p className="font-bold">2</p>
                  </div>
                  <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                    <FaPlus />
                  </div>
                </div>
                <p>R$ 78,99</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-5 rounded-md border-b border-neutral-300 bg-white p-4">
              <div className="flex flex-row justify-start gap-3">
                <div className="h-fit w-16 rounded-md border border-neutral-300 bg-white p-1">
                  <img
                    src="/images/cloth/1.png"
                    alt="produto"
                    className="w-full"
                  />
                </div>
                <div className="flex w-full flex-row justify-between">
                  <div className="flex flex-col p-1">
                    <h1 className="text-base text-zinc-900">
                      T-shirts with multiple colors for men
                    </h1>
                    <p className="text-[13px] text-gray-400">
                      Size: medium, Color: blue
                    </p>
                    <p className="text-[13px] text-gray-400">
                      Seller: Artel Market
                    </p>
                  </div>
                  <div className="cursor-pointer p-2 ">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row rounded-md border border-neutral-300">
                  <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                    <FaMinus />
                  </div>
                  <div className="flex items-center justify-center border-x border-neutral-300 px-4 py-2">
                    <p className="font-bold">2</p>
                  </div>
                  <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                    <FaPlus />
                  </div>
                </div>
                <p>R$ 78,99</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-5 rounded-md border-b border-neutral-300 bg-white p-4">
              <div className="flex flex-row justify-start gap-3">
                <div className="h-fit w-16 rounded-md border border-neutral-300 bg-white p-1">
                  <img
                    src="/images/cloth/1.png"
                    alt="produto"
                    className="w-full"
                  />
                </div>
                <div className="flex w-full flex-row justify-between">
                  <div className="flex flex-col p-1">
                    <h1 className="text-base text-zinc-900">
                      T-shirts with multiple colors for men
                    </h1>
                    <p className="text-[13px] text-gray-400">
                      Size: medium, Color: blue
                    </p>
                    <p className="text-[13px] text-gray-400">
                      Seller: Artel Market
                    </p>
                  </div>
                  <div className="cursor-pointer p-2 ">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row rounded-md border border-neutral-300">
                  <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                    <FaMinus />
                  </div>
                  <div className="flex items-center justify-center border-x border-neutral-300 px-4 py-2">
                    <p className="font-bold">2</p>
                  </div>
                  <div className="flex cursor-pointer items-center justify-center p-2 px-3">
                    <FaPlus />
                  </div>
                </div>
                <p>R$ 78,99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-3">
          <div className="hidden flex-col gap-2 rounded-md bg-white p-5 md:flex">
            <p className="text-base font-normal text-neutral-600">
              Have a coupon?
            </p>
            <div className="flex flex-row items-center justify-center">
              <Input
                placeholder="Add coupon"
                className="rounded-r-none py-3 placeholder:text-gray-400"
              />
              <Button className="rounded-l-none bg-transparent text-blue-600 hover:bg-transparent">
                Apply
              </Button>
            </div>
          </div>
          <div className="w-[280px] rounded-md bg-white p-4 py-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-between ">
                <p className="text-gray-400">Items (3):</p>
                <p className="text-right font-medium text-zinc-900">R$ 32,00</p>
              </div>
              <div className="flex flex-row items-center justify-between ">
                <p className="text-gray-400">Shipping:</p>
                <p className="text-right font-medium text-zinc-900">R$ 10,00</p>
              </div>
              <div className="flex flex-row items-center justify-between ">
                <p className="text-gray-400">Tax:</p>
                <p className="text-right font-medium text-zinc-900">R$ 7,00</p>
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
              <Button className="w-full bg-green-600 py-5 text-center text-base font-medium text-white hover:bg-green-700 lg:bg-red-500">
                Checkout <span className="lg:hidden">(3 items)</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Home
