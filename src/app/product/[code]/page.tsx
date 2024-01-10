'use client'

import { ProductProps } from '@/@types'
import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useCart } from '@/hooks/useCart'
import { useFavorites } from '@/hooks/useFavorites'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

const Home = ({ params }: { params: { code: string } }) => {
  const code = params.code
  const [product, setProduct] = useState<ProductProps>({} as ProductProps)
  const [similares, setSimilares] = useState<ProductProps[]>(
    [] as ProductProps[],
  )
  const [favorites] = useFavorites((state) => [state.favorites])
  // const [cart] = useCart((state) => [state.cart])

  useEffect(() => {
    const fetchProduct = async () => {
      await axios
        .post('http://localhost:3000/products', { code })
        .then((response) => {
          setProduct(response.data)
        })

      if (!product.category) return
      await axios
        .post('http://localhost:3000/category', {
          category: 'tecnologia',
        })
        .then((res) => setSimilares(res.data))
    }
    fetchProduct()
  }, [code, product.category])

  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="w-full">
        <div className="w-ful">
          <div className="w-full bg-white">
            <Carousel
              className="flex w-fit md:hidden"
              opts={{
                align: 'start',
              }}
            >
              <CarouselContent className="-ml-4">
                <CarouselItem className="basis-[80%]">
                  <div className="">
                    <img src={product.image} alt={product.name} />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-[80%]">
                  <div className="">
                    <img src="/images/tech/4.png" alt={product.name} />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-[80%]">
                  <div className="">
                    <img src="/images/tech/7.png" alt={product.name} />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 bg-white p-4">
            <div className="flex flex-row items-center justify-between">
              <img src="/images/rating/4.png" alt="four stars" />
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
              <div className="flex flex-row items-center justify-center gap-1.5">
                <img
                  src="/images/icons/message.png"
                  alt="message icon"
                  className="h-[18px] w-[18px]"
                />
                <p className="text-sm text-zinc-500">32 reviews</p>
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300 "></div>
              <div className="flex flex-row items-center justify-center gap-1.5">
                <img
                  src="/images/icons/shopping_cart.png"
                  alt="cart shopping"
                  className="h-[18px] w-[18px]"
                />
                <p className="text-sm text-zinc-500">154 sold</p>
              </div>
            </div>
            <h1 className="mb-1.5 mt-3 line-clamp-1 text-left text-lg font-medium text-zinc-900">
              {product.name}
            </h1>
            <h1 className="pb-3 text-lg font-semibold text-red-500">
              R$ {product.price}
              {'     '}
              <span className="text-sm text-gray-400">
                ({product.availableQuantity} pcs)
              </span>
            </h1>
            <div className="flex items-center gap-2 pb-5">
              <Button className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600">
                Adicionar ao Carrinho
              </Button>
              <div className="flex h-fit w-fit items-center justify-center rounded-md border-2 border-gray-300 hover:border-gray-200 hover:bg-gray-200 hover:text-red-600">
                <IoMdHeartEmpty className="m-2 h-5 w-5 text-blue-600" />
              </div>
            </div>
            {/* info */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center justify-between pr-16">
                  <h2 className="text-gray-400">Condition</h2>
                  <p className="text-neutral-600">Brand New</p>
                </div>
                <div className="flex flex-row items-center justify-between pr-16">
                  <h2 className="text-gray-400">Material</h2>
                  <p className="text-neutral-600">Plástico</p>
                </div>
                <div className="flex flex-row items-center justify-between pr-16">
                  <h2 className="text-gray-400">Categoria</h2>
                  <p className="capitalize text-neutral-600">
                    {product.category}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between pr-16">
                  <h2 className="text-gray-400">Codigo</h2>
                  <p className="text-neutral-600">{product.code}</p>
                </div>
              </div>
              <h2 className="mt-2.5 line-clamp-3 text-neutral-600">
                {product.description}
              </h2>
              <p className="mt-2 cursor-pointer font-medium text-blue-600">
                Ler Mais
              </p>
            </div>
          </div>
          <div className="m-2.5 rounded-md border-2 border-gray-300 bg-white p-2.5">
            <div className="flex flex-row items-center gap-2.5">
              <div className="relative">
                <img src="/assets/rectangle.png" alt="perfil vendedor" />
                <p className="absolute left-[30%] top-0 text-[28px] font-semibold text-emerald-400 text-opacity-60">
                  R
                </p>
              </div>
              <div className="flex w-full flex-row items-center justify-between">
                <div className="text-neutral-600">
                  <p>Supplier</p>
                  <p>Gunji Trading LLC</p>
                </div>
                <ChevronRightIcon className="text-gray-600" />
              </div>
            </div>
            <div className="my-3 h-[1px] w-full bg-gray-300"></div>
            <div className="flex flex-row items-center justify-evenly">
              <div className="flex flex-row items-center gap-1.5 text-neutral-600">
                <img src="/images/icons/eua.png" alt="icon" className="h-5" />
                <p>EUA</p>
              </div>
              <div className="flex flex-row items-center gap-1.5 text-neutral-600">
                <img
                  src="/images/icons/verified_user.png"
                  alt="icon"
                  className="h-5 w-5"
                />
                <p>Verificado</p>
              </div>
              <div className="flex flex-row items-center gap-1.5 text-neutral-600">
                <img
                  src="/images/icons/language.png"
                  alt="icon"
                  className="h-5 w-5"
                />
                <p>Envio</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 p-2.5">
            <h1 className="text-lg font-semibold text-zinc-900">
              Produtos similares
            </h1>
            <div className="">
              <Swiper
                slidesPerView={'auto'}
                direction={'horizontal'}
                mousewheel={true}
                freeMode={true}
                spaceBetween={12}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Mousewheel, Navigation]}
                className="mySwiper w-full"
              >
                {similares &&
                  similares.map((product: ProductProps) => (
                    <SwiperSlide
                      key={product.id}
                      className="h-fit max-w-[150px]"
                    >
                      <div className="flex h-fit max-w-[150px] cursor-pointer flex-col gap-2 rounded-md border-2 border-gray-300 bg-white px-3 pb-4 pt-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-[119px] p-[7.4px]"
                        />
                        <div className="flex flex-col items-start justify-center leading-snug">
                          <h1 className="font-medium text-zinc-900">
                            R$ {product.price}
                          </h1>
                          <p className="line-clamp-1 w-full text-[13px] text-gray-400">
                            {product.name}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Home
