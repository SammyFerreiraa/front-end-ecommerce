import { create } from 'zustand'

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
interface UseCartProps {
  cart: ProductCartProps[]
  setCart: (cart: ProductCartProps[]) => void
}

export const useCart = create<UseCartProps>((set) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
}))
