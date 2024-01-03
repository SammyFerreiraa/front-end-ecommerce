import { create } from 'zustand'
import { cartProps } from '../@types'
interface UseCartProps {
  cart: cartProps
  setCart: (cart: cartProps) => void
  setQuantity: (code: string, quantity: number) => void
  removeProduct: (code: string) => void
}

export const useCart = create<UseCartProps>((set) => ({
  cart: { id: '', products: [] },
  setCart: (cart) => set({ cart }),
  setQuantity: (code, quantity) => {
    set((state) => ({
      cart: {
        ...state.cart,
        products: state.cart.products.map((product) => {
          if (product.code === code) {
            return { ...product, quantity }
          }
          return product
        }),
      },
    }))
  },
  removeProduct: (code) => {
    set((state) => ({
      cart: {
        ...state.cart,
        products: state.cart.products.filter(
          (product) => product.code !== code,
        ),
      },
    }))
  },
}))
