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
