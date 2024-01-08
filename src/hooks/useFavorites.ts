import { create } from 'zustand'
import { ProductProps, favoritesProps } from '../@types'
interface useFavoritesProps {
  favorites: favoritesProps
  setFavorites: (favorites: favoritesProps) => void
  removeProduct: (code: string) => void
  addProduct: (product: ProductProps) => void
  favoritesEmpty: boolean
  setFavoritesEmpty: (favoritesEmpty: boolean) => void
}

export const useFavorites = create<useFavoritesProps>((set) => ({
  favorites: { id: '', products: [] },
  favoritesEmpty: true,
  setFavorites: (favorites) => set({ favorites }),
  removeProduct: (code) => {
    set((state) => ({
      favorites: {
        ...state.favorites,
        products: state.favorites.products.filter(
          (product) => product.code !== code,
        ),
      },
    }))
  },
  addProduct: (product) => {
    set((state) => ({
      favorites: {
        ...state.favorites,
        products: [...state.favorites.products, product],
      },
    }))
  },
  setFavoritesEmpty: (favoritesEmpty) => set({ favoritesEmpty }),
}))
