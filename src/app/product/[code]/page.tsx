'use client'

import { ProductProps } from '@/@types'
import { MaxWidthWrapper } from '@/components'
import { useCart } from '@/hooks/useCart'
import { useFavorites } from '@/hooks/useFavorites'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = ({ params }: { params: { code: string } }) => {
  const code = params.code
  const [product, setProduct] = useState<ProductProps>({} as ProductProps)
  // const [favorites] = useFavorites((state) => [state.favorites])
  // const [cart] = useCart((state) => [state.cart])

  useEffect(() => {
    const fetchProduct = async () => {
      await axios
        .post('http://localhost:3000/products', { code })
        .then((response) => {
          setProduct(response.data)
        })
    }
    fetchProduct()
  }, [code])
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div>{product.name}</div>
    </MaxWidthWrapper>
  )
}

export default Home
