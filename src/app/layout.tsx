import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { MaxWidthWrapper } from '@/components'
import { IoMenu } from 'react-icons/io5'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import { buttonVariants } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CartIcon, MessageIcon, UserIcon } from '@/components/icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce App',
  description: 'Created By Sammy Ferreira',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn('relative h-full antialiased', inter.className)}>
        <main className="relative flex min-h-screen flex-col">
          <MaxWidthWrapper className="px-4 py-4 md:px-[50px] md:py-5 lg:py-6">
            <div className="flex items-center justify-between gap-10">
              <div
                className="min-w-7xl flex items-center gap-4 md:gap-11
              "
              >
                <IoMenu className="h-6 w-6 cursor-pointer md:hidden" />
                <img
                  src="./assets/logo-colored.png"
                  alt="Logo"
                  className="w-[116px] cursor-pointer"
                />
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
                      'w-fit rounded-r-md bg-blue-600 px-3 text-white lg:min-w-[100px]')
                    }
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5 lg:hidden">
                <FiShoppingCart className="h-6 w-6 cursor-pointer" />
                <FiUser className="h-6 w-6 cursor-pointer" />
              </div>
              <div className="hidden flex-row items-center gap-4 lg:flex ">
                <div className="flex cursor-pointer flex-col items-center justify-center gap-1">
                  <UserIcon />
                  <p className="text-xs text-gray-400">Profile</p>
                </div>
                <div className="flex cursor-pointer flex-col items-center justify-center gap-1">
                  <MessageIcon />
                  <p className="text-xs text-gray-400">Message</p>
                </div>
                <div className="flex cursor-pointer flex-col items-center justify-center gap-1">
                  <CartIcon />
                  <p className="text-xs text-gray-400">Orders</p>
                </div>
                <div className="flex cursor-pointer flex-col items-center justify-center gap-1">
                  <CartIcon />
                  <p className="text-xs text-gray-400">MyCart</p>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  )
}
