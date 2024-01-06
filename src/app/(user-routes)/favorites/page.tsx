'use client'

import { MaxWidthWrapper } from '@/components'
import { FavoritesProducts, FavoritesTitle } from '@/components/favorites'
import React from 'react'

const page = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      {/* title */}
      <div className="w-full bg-white px-4 py-4 shadow-md md:bg-transparent md:px-0 md:py-5 md:shadow-none">
        <FavoritesTitle />
      </div>
      {/* shopping favorites */}
      <div className="flex w-full flex-col md:gap-4 lg:flex-row">
        {/* Products section  */}
        <FavoritesProducts />
      </div>
    </MaxWidthWrapper>
  )
}

export default page
