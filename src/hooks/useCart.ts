import { create } from 'zustand'
import { ProductCartProps } from '../@types'
interface UseCartProps {
  cart: ProductCartProps[]
  setCart: (cart: ProductCartProps[]) => void
}

export const useCart = create<UseCartProps>((set) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
}))
