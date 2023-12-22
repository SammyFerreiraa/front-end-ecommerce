import { ProductProps } from '@/@types'
import { create } from 'zustand'

interface UseProductsProps {
  products: ProductProps[]
  setProducts: (products: ProductProps[]) => void
}

export const useProducts = create<UseProductsProps>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}))
