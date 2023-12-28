import { MaxWidthWrapper } from '@/components'
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
      <div className="w-full">
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
        <div></div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Home
