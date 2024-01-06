import { create } from 'zustand'
import { favoritesProps } from '../@types'
interface useFavoritesProps {
  favorites: favoritesProps
  setFavorites: (favorites: favoritesProps) => void
  removeProduct: (code: string) => void
}

export const useFavorites = create<useFavoritesProps>((set) => ({
  favorites: { id: '', products: [] },
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
}))
