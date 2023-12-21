import React from 'react'

const RecommendedItems = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3 px-3 py-5">
      <h1 className="text-xl font-semibold text-zinc-900 lg:text-2xl lg:leading-loose">
        Produtos Recomendados
      </h1>
      <div
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
  "
      >
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/cloth/1.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/cloth/3.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/cloth/6.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/interior/3.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/cloth/7.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/cloth/2.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/cloth/5.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/cloth/4.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/tech/9.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
        <div className="cursor-pointer rounded-md border-[1px] border-gray-300 bg-white p-3">
          <div className="flex items-center justify-center p-3">
            <img src="/images/tech/10.png" alt="camisa" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-snug text-zinc-900">$10.30</p>
            <p className="text-[13px] text-gray-400">
              T-shirts with multiple colors, for men
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendedItems
