import React from 'react'

const OffersItem = () => {
  return (
    <div className="flex h-fit max-w-[140px] flex-col gap-2 border-y-[1px] border-r-[1px] border-gray-300 bg-white px-3 pb-4 pt-2 lg:border-y-0 lg:border-l-[1px] lg:border-r-0">
      <img
        src="/images/tech/2.png"
        alt="camisa"
        className="h-[119px] p-[7.4px]"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[13px] text-zinc-900">Smart watches</p>
        <div className="flex items-center justify-center rounded-3xl bg-red-100 px-3 py-1">
          <p className="text-sm text-red-600">-25%</p>
        </div>
      </div>
    </div>
  )
}

export default OffersItem
