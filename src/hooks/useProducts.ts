import { ProductProps } from '@/@types'
import { create } from 'zustand'

export const useProducts = create((set) => ({
  products: [],
  setProducts: (products: ProductProps[]) => set({ products }),
}))
