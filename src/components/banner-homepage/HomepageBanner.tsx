import React from 'react'
import { getServerSession } from 'next-auth'
import { nextAuthOption } from '@/app/api/auth/[...nextauth]/auth'
import RightSide from './RightSide'

const HomepageBanner = async () => {
  const session = await getServerSession(nextAuthOption)
  return (
    <div className="flex w-full max-w-[1180px] flex-row justify-center gap-6 rounded-md border-2 border-zinc-300 bg-white md:mt-5 md:px-5 md:py-4">
      <div className="flex w-full items-center justify-evenly gap-6 ">
        {/* left */}
        <div className="hidden flex-col justify-between text-sm  lg:flex lg:min-w-[200px] xl:min-w-[250px]">
          <div className="w-full cursor-pointer rounded-md bg-sky-100 px-3 py-2 font-bold">
            <p>Eletrônicos</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Roupas</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Home interiors</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Computador e Tecnologia</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Equipamentos</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Esportes</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Animais e pets</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Ferramentas de maquinas</p>
          </div>
          <div className="w-full cursor-pointer rounded-md px-3 py-2 text-neutral-600">
            <p>Mais categorias</p>
          </div>
        </div>
        {/* center */}
        <div className="flex h-auto w-auto items-center justify-center">
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/banner.png"
              className="w-full max-w-[664px]"
              alt="tech"
            />
            <div className="absolute left-[10%] top-[10%] flex flex-col gap-5">
              <div className="flex flex-col gap-0">
                <p className="text-lg text-zinc-900">Últimas Tendências</p>
                <p className="text-lg font-semibold text-zinc-900">
                  Produtos Eletrônicos
                </p>
              </div>
              <button className="mt-2 rounded-md bg-white px-3 py-2 font-medium  text-blue-600 hover:opacity-80">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <RightSide name={session?.user?.name} />
    </div>
  )
}

export default HomepageBanner
