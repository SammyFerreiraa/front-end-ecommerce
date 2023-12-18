import { cn } from '@/lib/utils'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import React from 'react'
import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { IoMenu } from 'react-icons/io5'
import { MaxWidthWrapper } from '..'
import {
  UserIcon,
  MessageIcon,
  CartIcon,
  HeartIcon,
  EuaIcon,
  SearchIcon,
} from '../icons'
import { buttonVariants } from '../ui/button'
import { ChevronDownIcon } from '@radix-ui/react-icons'

const Header = () => {
  return (
    <MaxWidthWrapper className="px-4 py-4 text-sm md:px-[50px] md:py-5 lg:py-6">
      <div className="flex items-center justify-between gap-10">
        <div
          className="min-w-7xl flex items-center gap-4 md:gap-11 2xl:gap-24
    "
        >
          <IoMenu className="h-6 w-6 cursor-pointer md:hidden" />
          <img
            src="./assets/logo-colored.png"
            alt="Logo"
            className="w-[116px] cursor-pointer"
          />
          {/* Search Desktop */}
          <div className="hidden w-full flex-row md:flex">
            <input
              type="text"
              className="h-10 w-full rounded-l-md border-y-2 border-l-2 border-blue-600 bg-transparent px-4 py-2 text-gray-400 outline-none xl:min-w-[350px] 2xl:min-w-[410px]"
              placeholder="Search"
            />
            <Select>
              <SelectTrigger className="m-0 h-full w-fit rounded-none border-0 border-y-2 border-l-2 border-blue-600 pb-[9px] lg:min-w-[145px]">
                <SelectValue placeholder="Categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roupas">Roupas</SelectItem>
                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                <SelectItem value="acessorios">Acessórios</SelectItem>
              </SelectContent>
            </Select>
            <button
              className={
                (cn(buttonVariants),
                'w-fit rounded-r-md bg-blue-600 px-3 text-white hover:bg-blue-500 lg:min-w-[100px]')
              }
            >
              Search
            </button>
          </div>
        </div>
        {/* Nav Mobile  */}
        <div className="flex flex-row items-center gap-5 lg:hidden">
          <FiShoppingCart className="h-6 w-6 cursor-pointer" />
          <FiUser className="h-6 w-6 cursor-pointer" />
        </div>

        {/* Nav Desktop  */}
        <div className="hidden flex-row items-center gap-4 lg:flex ">
          <div className="flex cursor-pointer flex-col items-center justify-center gap-1 hover:opacity-70">
            <UserIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400">Profile</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center gap-1 hover:opacity-70">
            <MessageIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400">Message</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center gap-1 hover:opacity-70">
            <HeartIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400">Orders</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center gap-1 hover:opacity-70">
            <CartIcon fill="#8B96A5" />
            <p className="text-xs text-gray-400">MyCart</p>
          </div>
        </div>
      </div>
      {/* Search Mobile */}
      <div className="mt-4 flex h-10 w-full flex-row items-center gap-2 rounded-md bg-gray-100 px-2 md:hidden">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="w-full appearance-none bg-transparent focus:outline-none focus:ring-0"
        />
      </div>

      {/* SubBar Desktop  */}
      <div className="hidden justify-between py-5 text-xs md:flex lg:text-sm">
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
