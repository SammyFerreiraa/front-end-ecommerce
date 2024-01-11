'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const TopOptions = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div className="flex w-full flex-col items-center justify-center p-3 text-zinc-900">
      <div
        className={`flex w-full cursor-pointer items-center justify-start gap-4 rounded-md p-3 ${
          pathname === '/' ? 'bg-gray-200' : ''
        }`}
        onClick={() => {
          if (pathname !== '/') router.push('/')
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="#8B96A5"
          />
        </svg>
        <p>Inicio</p>
      </div>
      <div
        className={`flex w-full cursor-pointer items-center justify-start gap-4 rounded-md p-3 ${
          pathname === '/categories' ? 'bg-gray-200' : ''
        }`}
        onClick={() => {
          if (pathname !== '/categories') router.push('/categories')
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.25 10.5C3.42 10.5 2.75 11.17 2.75 12C2.75 12.83 3.42 13.5 4.25 13.5C5.08 13.5 5.75 12.83 5.75 12C5.75 11.17 5.08 10.5 4.25 10.5ZM4.25 4.5C3.42 4.5 2.75 5.17 2.75 6C2.75 6.83 3.42 7.5 4.25 7.5C5.08 7.5 5.75 6.83 5.75 6C5.75 5.17 5.08 4.5 4.25 4.5ZM4.25 16.5C3.42 16.5 2.75 17.18 2.75 18C2.75 18.82 3.43 19.5 4.25 19.5C5.07 19.5 5.75 18.82 5.75 18C5.75 17.18 5.08 16.5 4.25 16.5ZM7.25 19H21.25V17H7.25V19ZM7.25 13H21.25V11H7.25V13ZM7.25 5V7H21.25V5H7.25Z"
            fill="#8B96A5"
          />
        </svg>
        <p>Categorias</p>
      </div>
      <div
        className={`flex w-full cursor-pointer items-center justify-start gap-4 rounded-md p-3 ${
          pathname === '/favorites' ? 'bg-gray-200' : ''
        }`}
        onClick={() => {
          if (pathname !== '/favorites') router.push('/favorites')
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 2.8252C14.76 2.8252 13.09 3.6352 12 4.9152C10.91 3.6352 9.24 2.8252 7.5 2.8252C4.42 2.8252 2 5.2452 2 8.3252C2 12.1052 5.4 15.1852 10.55 19.8652L12 21.1752L13.45 19.8552C18.6 15.1852 22 12.1052 22 8.3252C22 5.2452 19.58 2.8252 16.5 2.8252ZM12.1 18.3752L12 18.4752L11.9 18.3752C7.14 14.0652 4 11.2152 4 8.3252C4 6.3252 5.5 4.8252 7.5 4.8252C9.04 4.8252 10.54 5.8152 11.07 7.1852H12.94C13.46 5.8152 14.96 4.8252 16.5 4.8252C18.5 4.8252 20 6.3252 20 8.3252C20 11.2152 16.86 14.0652 12.1 18.3752Z"
            fill="#8B96A5"
          />
        </svg>
        <p>Favoritos</p>
      </div>
      <div
        className={`flex w-full cursor-pointer items-center justify-start gap-4 rounded-md p-3 ${
          pathname === '/cart' ? 'bg-gray-200' : ''
        }`}
        onClick={() => {
          if (pathname !== '/cart') router.push('/cart')
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM19 20H5V9H19V20ZM20 7H4V4H20V7Z"
            fill="#8B96A5"
          />
          <path d="M15 12H9V14H15V12Z" fill="#8B96A5" />
        </svg>
        <p>Meu Carrinho</p>
      </div>
    </div>
  )
}

export default TopOptions
