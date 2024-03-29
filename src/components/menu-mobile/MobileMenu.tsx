'use client'

import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from '../ui/sheet'
import { Separator } from '../ui/separator'
import { HamburgerIcon } from '../icons'
import { useSession } from 'next-auth/react'
import AuthMobileMenu from './AuthMobileMenu'
import LogoutButtonMobile from './LogoutButtonMobile'
import TopOptions from './TopOptions'

const MobileMenu = () => {
  const { data: session } = useSession()
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerIcon />
      </SheetTrigger>
      <SheetContent className="max-w-[280px] p-0" side="left">
        <SheetHeader className="flex w-full flex-col gap-3 bg-gray-200 p-5">
          <img src="/assets/Avatar.png" alt="avatar" className="h-11 w-11" />
          {!session?.user?.name && <AuthMobileMenu />}

          {session?.user?.name && (
            <div className="flex flex-col items-start justify-start gap-1 text-zinc-900">
              <p>{session?.user?.name}</p>
              <LogoutButtonMobile />
            </div>
          )}
        </SheetHeader>
        <TopOptions />
        <Separator className="border-zinc-300" />
        <div className="flex w-full flex-col items-center justify-center p-3 text-zinc-900">
          <div className="flex w-full cursor-pointer items-center justify-start gap-4 p-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
                fill="#8B96A5"
              />
            </svg>

            <p>Português | BRL</p>
          </div>
          <div className="flex w-full cursor-pointer items-center justify-start gap-4 p-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 14V18H17V14H19ZM7 14V18H6C5.45 18 5 17.55 5 17V14H7ZM12 1C7.03 1 3 5.03 3 10V17C3 18.66 4.34 20 6 20H9V12H5V10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10V12H15V20H19V21H12V23H18C19.66 23 21 21.66 21 20V10C21 5.03 16.97 1 12 1Z"
                fill="#8B96A5"
              />
            </svg>

            <p>Contate-nos</p>
          </div>
          <div className="flex w-full cursor-pointer items-center justify-start gap-4 p-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
                fill="#8B96A5"
              />
            </svg>

            <p>Sobre</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
