import { create } from 'zustand'
import { ProductCartProps } from '../@types'
interface UseCartProps {
  cart: ProductCartProps[]
  setCart: (cart: ProductCartProps[]) => void
  setQuantity: (code: string, quantity: number) => void
}

export const useCart = create<UseCartProps>((set) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
  setQuantity: (code, quantity) => {
    set((state) => ({
      cart: state.cart.map((product) => {
        if (product.code === code) {
          return { ...product, quantity }
        }
        return product
      }),
    }))
  },
}))
