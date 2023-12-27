import { MaxWidthWrapper } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="w-full bg-white px-4 py-4 shadow-md md:bg-transparent md:px-0 md:py-7 md:shadow-none">
        <h1 className="text-lg font-semibold text-zinc-900 md:text-2xl">
          Shopping Cart (3)
        </h1>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Home
