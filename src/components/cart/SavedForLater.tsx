import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Button } from '../ui/button'

const SavedForLater = () => {
  return (
    <div className="mt-5 flex w-full flex-col items-center gap-5 px-3 lg:rounded-md lg:bg-white lg:p-5">
      <h1 className="w-full text-left text-lg font-semibold text-zinc-900">
        Saved for later
      </h1>
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-4 lg:gap-5">
        <div className="flex flex-row gap-3 rounded-md border-2 border-gray-300 bg-white p-2 lg:flex-col lg:rounded-none lg:border-none lg:p-0">
          <div className="flex h-full max-h-[133px] w-fit items-center justify-center lg:max-h-none lg:w-full lg:px-5 lg:py-2">
            <img src="/images/tech/1.png" alt="mmm" className="h-full w-full" />
          </div>
          <div className="flex flex-col items-start justify-center gap-3 ">
            <div className="flex flex-col ">
              <h1 className="hidden text-lg font-semibold text-zinc-900 lg:flex">
                R$ 70.99
              </h1>
              <p className="line-clamp-1 hidden text-sm leading-normal text-zinc-600 lg:flex">
                GoPro HERO6 4K Action Camera - Black
              </p>

              <h1 className="line-clamp-1 text-neutral-600 lg:hidden">
                Regular Fit Resort Shirt
              </h1>
              <p className="text-base font-semibold text-zinc-800 lg:hidden">
                R$ 50.00
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button className="flex flex-row items-center justify-center gap-1 border-2 border-zinc-300 bg-transparent text-center font-semibold text-blue-600 hover:bg-blue-600 hover:text-white">
                <MdOutlineShoppingCart className="h-4 w-4" />
                Move to cart
              </Button>
              <Button className="border-2 border-zinc-300 bg-transparent text-center font-semibold text-red-600 hover:bg-red-600 hover:text-white lg:hidden">
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedForLater
