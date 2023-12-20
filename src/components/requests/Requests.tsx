import React from 'react'
import { Button } from '../ui/button'

const Requests = () => {
  return (
    <div className="w-full bg-opacity-5 bg-[url('/assets/bg-estoque.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative h-full w-full bg-blue-500 bg-opacity-70 from-blue-500 to-cyan-400 pb-9 pl-6 pr-28 pt-7">
        <div className="flex h-full w-full flex-col items-start justify-center gap-5 opacity-100">
          <p className="text-lg font-semibold text-white">
            An easy way to send requests to all suppliers
          </p>
          <Button className="rounded-md bg-gradient-to-b from-blue-600 to-blue-500 px-3 py-2 text-[13px] text-white hover:from-blue-600 hover:to-blue-600">
            Send inquiry
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Requests
