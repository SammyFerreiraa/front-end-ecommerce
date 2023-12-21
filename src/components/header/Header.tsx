'use client'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import React from 'react'
import { IoMenu } from 'react-icons/io5'
import { MaxWidthWrapper } from '..'
import {
  UserIcon,
  MessageIcon,
  CartIcon,
  HeartIcon,
  EuaIcon,
  SearchIcon,
  MobileCartIcon,
} from '../icons'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

// import required modules
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules'
import MobileUserIcon from '../icons/MobileUserIcon'
import MobileMenu from '../menu-mobile/MobileMenu'

const Header = async () => {
  return (
    <MaxWidthWrapper className="px-4 text-sm md:px-[50px]">
      <div className="flex items-center justify-between gap-6  border-zinc-300 py-4 md:border-b-2 md:py-5 lg:py-6">
        <div
          className="min-w-7xl flex items-center gap-4 md:gap-7 2xl:gap-11
    "
        >
          <MobileMenu />

          <img
            src="./assets/logo-colored.png"
            alt="Logo"
            className="w-[116px] cursor-pointer"
          />
          {/* Search Desktop */}
          <div className="hidden w-full flex-row md:flex">
            <input
              type="text"
              className="h-10 w-full rounded-l-md border-y-2 border-l-2 border-blue-600 bg-transparent px-4 py-2 text-black outline-none placeholder:text-gray-400"
              placeholder="Search"
            />
            <Select>
              <SelectTrigger className="m-0 h-full w-fit rounded-none border-0 border-y-2 border-l-2 border-blue-600 pb-[9px] lg:min-w-[120px]">
                <SelectValue placeholder="Categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roupas">Roupas</SelectItem>
                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                <SelectItem value="acessorios">Acessórios</SelectItem>
              </SelectContent>
            </Select>
            <button className="w-fit rounded-r-md bg-blue-600 px-3 text-white hover:bg-blue-500 lg:min-w-[80px]">
              Search
            </button>
          </div>
        </div>
        {/* Nav Mobile  */}
        <div className="flex flex-row items-center gap-5 lg:hidden">
          <MobileCartIcon />
          <MobileUserIcon />
        </div>

        {/* Nav Desktop  */}
        <div className="hidden flex-row items-center gap-4 md:flex">
          <div className="flex cursor-pointer flex-col items-center justify-between gap-1 hover:opacity-70">
            <UserIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400">Perfil</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-between gap-1 hover:opacity-70">
            <MessageIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400">Mensagem</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-between gap-1 hover:opacity-70">
            <HeartIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400">Pedidos</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-between gap-1 hover:opacity-70">
            <CartIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400 ">Carrinho</p>
          </div>
        </div>
      </div>
      {/* Search Mobile */}
      <div className="mb-5 px-2 md:hidden">
        <div className="flex h-10 w-full flex-row items-center gap-2 rounded-md bg-gray-100 px-2">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full appearance-none bg-transparent focus:outline-none focus:ring-0"
          />
        </div>
        <>
          <Swiper
            slidesPerView={3.1}
            direction={'horizontal'}
            mousewheel={true}
            freeMode={true}
            spaceBetween={4}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Mousewheel, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">All category</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">Gadgets</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">Accessory</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">All category</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">Tablets</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">Phones</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">iPads</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-fit">
              <div className="h-fit rounded-md bg-gray-100 p-2">
                <p className="h-fit text-center text-blue-600">iPods</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>

      {/* SubBar Desktop  */}
      <div className="hidden justify-between border-b-2 border-zinc-300 py-5 text-xs md:flex xl:text-sm">
        <div className="flex items-center justify-center gap-6">
          <div className="flex cursor-pointer items-center justify-center gap-1">
            <IoMenu />
            <p>All Category</p>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1">
            <p>Hot offers</p>
          </div>
          <div className=" cursor-pointer gap-1">
            <p>Gift Boxes</p>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1">
            <p>Projects</p>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1">
            <p>Menu item</p>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1">
            <p>Help</p>
            <ChevronDownIcon />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="flex cursor-pointer items-center justify-center">
            <p>Portuguese, BRL</p>
            <ChevronDownIcon />
          </div>
          <div className="flex cursor-pointer items-center justify-center">
            <p className="mr-2">Ship to</p>
            <EuaIcon />
            <ChevronDownIcon className="ml-1" />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Header
