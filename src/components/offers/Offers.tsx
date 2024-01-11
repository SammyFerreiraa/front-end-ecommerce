'use client'

import React, { useEffect, useState } from 'react'
import SwiperOffers from './SwiperOffers'

const Offers = () => {
  const [tempo, setTempo] = useState({ horas: 14, minutos: 57, segundos: 59 })
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setIsRunning(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let intervalId: any

    if (isRunning) {
      intervalId = setInterval(() => {
        setTempo((prevTempo) => {
          const segundos = prevTempo.segundos - 1
          if (segundos < 0) {
            const minutos = prevTempo.minutos - 1
            if (minutos < 0) {
              const horas = prevTempo.horas - 1
              return { horas, minutos: 59, segundos: 59 }
            }
            return { horas: prevTempo.horas, minutos, segundos: 59 }
          }
          return { ...prevTempo, segundos }
        })
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  return (
    <div className="flex w-full flex-col rounded-md border-gray-300 bg-white md:border-[1px] lg:flex-row">
      <div className="flex w-full justify-between py-3 pl-4 pr-3 lg:w-fit lg:flex-col lg:justify-start lg:gap-4 lg:p-5">
        <div className="w-fit">
          <p className="text-lg font-semibold text-zinc-900">
            Promoções e ofertas
          </p>
          <p className="text-[13px] text-neutral-600">Eletrônicos</p>
        </div>
        <div className="flex w-fit flex-row gap-1">
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400 lg:rounded lg:bg-zinc-600 lg:text-white">
            <p className="font-semibold">{tempo.horas}</p>
            <p className="text-[11px] ">Horas</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400 lg:rounded lg:bg-zinc-600 lg:text-white">
            <p className="font-semibold">{tempo.minutos}</p>
            <p className="text-[11px] ">Min</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200 px-3 py-[6px] text-gray-400 lg:rounded lg:bg-zinc-600 lg:text-white">
            <p className="font-semibold">{tempo.segundos}</p>
            <p className="text-[11px] ">Seg</p>
          </div>
        </div>
      </div>
      <SwiperOffers />
    </div>
  )
}

export default Offers
