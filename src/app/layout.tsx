import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import NextAuthSessionProvider from '@/providers/NextAuthSessionProvinder'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

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
    <NextAuthSessionProvider>
      <html lang="en" className="h-full">
        <body className={cn('relative h-full antialiased', inter.className)}>
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
          />
          <main className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1 flex-grow bg-gray-100">{children}</div>
          </main>
        </body>
      </html>
    </NextAuthSessionProvider>
  )
}
