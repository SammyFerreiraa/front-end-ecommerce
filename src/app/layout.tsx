import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'

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
          <Header />
          <div className="flex-1 flex-grow bg-gray-100">{children}</div>
        </main>
      </body>
    </html>
  )
}
