import { schemaFormLogin, schemaFormRegister } from '@/schemas'
import { z } from 'zod'

export type MaxWidthWrapperProps = {
  className?: string
  children: React.ReactNode
}

export type ProductProps = {
  id: string
  name: string
  description: string
  price: string
  availableQuantity: number
  category: string
  image: string
  featured: boolean
  code: string
  offer: boolean
  discount: string
}

export interface OffersItemProps {
  name: string
  discount: string
  image: string
}

export type ItemRecommendedProps = {
  name: string
  image: string
  price: string
  favorite: boolean
  product: ProductProps
}

type ProductCartProps = {
  id: string
  name: string
  code: string
  price: string
  description: string
  offer: boolean
  discount: string
  category: string
  image: string
  featured: boolean
  quantity: number
}

type cartProps = {
  id: string
  products: ProductCartProps[]
}

type favoritesProps = {
  id: string
  products: ProductProps[]
}

export type userProps = {
  id: string
  name: string
  email: string
  cart: {
    id: string
    products: ProductCartProps[]
  }
}

declare module 'next-auth' {
  interface Session {
    token: string
    user: userProps
  }
}

export type formLoginProps = z.infer<typeof schemaFormLogin>
export type formRegisterProps = z.infer<typeof schemaFormRegister>
