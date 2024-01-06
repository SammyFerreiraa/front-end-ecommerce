'use client'

import React, { useEffect } from 'react'
import { HeartIcon } from '../icons'
import { useFavorites } from '@/hooks/useFavorites'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const FavoritesHeaderDesktop = () => {
  const router = useRouter()
  const [favorites, setFavorites] = useFavorites((state) => [
    state.favorites,
    state.setFavorites,
  ])
  const { data: session } = useSession()

  useEffect(() => {
    const fetchCart = async () => {
      if (!session?.token) return
      await axios
        .get('http://localhost:3000/profile', {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        })
        .then((res) => {
          setFavorites(res.data.favorites)
        })
    }
    fetchCart()
  }, [session?.token, setFavorites])
  return (
    <div
      className="relative flex cursor-pointer flex-col items-center justify-between gap-1 hover:opacity-70"
      onClick={() => router.push('/favorites')}
    >
      <HeartIcon fill="#8B96A5" />
      {session?.token && (
        <div className="absolute -right-0.5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          {favorites?.products?.length}
        </div>
      )}
      <p className="text-xs text-gray-400">Favoritos</p>
    </div>
  )
}

export default FavoritesHeaderDesktop
