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
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { CheckIcon } from '@/components/icons'

const Home = ({ params }: { params: { code: string } }) => {
  const { data: session } = useSession()
  const router = useRouter()
  const code = params.code
  const [readMore, setReadMore] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [product, setProduct] = useState<ProductProps>({} as ProductProps)
  const [similares, setSimilares] = useState<ProductProps[]>(
    [] as ProductProps[],
  )
  const [favorites, addProduct, setFavoritesEmpty, setFavorites] = useFavorites(
    (state) => [
      state.favorites,
      state.addProduct,
      state.setFavoritesEmpty,
      state.setFavorites,
    ],
  )
  const [cart, setCartEmpty, setCart, removeProduct] = useCart((state) => [
    state.cart,
    state.setEmpty,
    state.setCart,
    state.removeProduct,
  ])

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
          category: product.category,
        })
        .then((res) => setSimilares(res.data))
    }
    fetchProduct()

    if (favorites.products.some((item) => item.code === code)) {
      setFavorite(true)
    }
    if (cart.products.some((item) => item.code === code)) {
      setInCart(true)
    }
  }, [code, product.category, favorites.products, cart.products])

  const removeToFavorites = (code: string) => {
    const newFavorites = favorites.products.filter(
      (product) => product.code !== code,
    )

    setFavorites({ ...favorites, products: newFavorites })
    setFavorite(false)

    if (!session?.token) return
    const req = async () => {
      await axios.delete(`http://localhost:3000/favorites`, {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
        data: {
          productCode: code,
        },
      })
    }
    req()
  }

  const addFavorites = (code: string, product: ProductProps) => {
    if (favorites.products.find((p) => p.code === code)) return
    addProduct(product)
    setFavoritesEmpty(false)
    setFavorite(true)

    if (!session?.token) return
    const req = async () => {
      await axios.post(
        'http://localhost:3000/favorites',
        {
          productCode: product.code,
        },
        { headers: { Authorization: `Bearer ${session?.token}` } },
      )
    }
    req()
  }

  const addToCart = (code: string, product: ProductProps) => {
    if (cart.products.find((p) => p.code === code)) return
    setCart({
      ...cart,
      products: [...cart.products, { ...product, code, quantity: 1 }],
    })

    setInCart(true)
    setCartEmpty(false)

    if (!session?.token) return
    const req = async () => {
      await axios.post(
        `http://localhost:3000/cart`,
        {
          productCode: code,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        },
      )
    }
    req()
  }

  const removeItemFromCart = (productCode: string) => {
    removeProduct(productCode)
    setInCart(false)
    if (cart.products.length === 1) setCartEmpty(true)
    if (!session?.token) return
    const req = async () => {
      await axios.delete(`http://localhost:3000/cart/remove/item`, {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
        data: {
          productCode,
        },
      })
    }
    req()
  }

  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-3 pb-11 md:px-[50px] lg:px-12 xl:px-0">
      <div className="w-full">
        <div className="w-full">
          <div className="my-4 hidden flex-row items-center gap-1.5 text-gray-400 md:flex">
            <p
              className="cursor-pointer capitalize"
              onClick={() => router.push('/')}
            >
              Home
            </p>
            <ChevronRightIcon />
            <p
              className="cursor-pointer capitalize"
              onClick={() => router.push('/products')}
            >
              Produtos
            </p>
            <ChevronRightIcon />
            <p className="cursor-pointer capitalize">{product.category}</p>
            <ChevronRightIcon />
            <p>{product.name}</p>
          </div>
          {/* Desktop infor and carrossel mobile */}
          <div className="w-full bg-white p-5 md:flex md:flex-row md:justify-evenly md:gap-5 md:rounded-md md:border md:border-gray-300 xl:justify-between">
            <div className="flex flex-col gap-5">
              <div className="hidden max-w-[345px] rounded-md border border-gray-300 p-1 md:flex">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="flex flex-row justify-between gap-2">
                <div className="hidden max-w-[56px] cursor-pointer rounded-md border border-black p-1 md:flex">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="hidden max-w-[56px] cursor-pointer rounded-md border border-gray-300 p-1 md:flex">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="hidden max-w-[56px] cursor-pointer rounded-md border border-gray-300 p-1 md:flex">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="hidden max-w-[56px] cursor-pointer rounded-md border border-gray-300 p-1 md:flex">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="hidden max-w-[56px] cursor-pointer rounded-md border border-gray-300 p-1 md:flex">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="hidden max-w-[56px] cursor-pointer rounded-md border border-gray-300 p-1 md:flex">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
            </div>
            <div className="hidden flex-col md:flex">
              <div className="flex flex-col">
                {product.availableQuantity > 0 && (
                  <div className="mb-1 flex flex-row items-center gap-1">
                    <CheckIcon />
                    <p className="text-sm leading-normal text-green-600">
                      Disponível
                    </p>
                  </div>
                )}
                <h1 className=" line-clamp-2 text-xl font-semibold text-zinc-900">
                  {product.name}
                </h1>
                <div className="mt-3 flex min-w-[280px] flex-row items-center justify-between">
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
                    <p className="text-sm text-zinc-500">154 vendidos</p>
                  </div>
                </div>
              </div>
              {/* adicionar e remover favoritos e carrinho */}
              <div className="mt-4 flex flex-row gap-3">
                {!inCart && (
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600"
                    onClick={() => addToCart(code, product)}
                  >
                    Adicionar ao Carrinho
                  </Button>
                )}
                {inCart && (
                  <Button
                    className="w-full bg-red-600 text-white hover:bg-white hover:text-red-600"
                    onClick={() => removeItemFromCart(code)}
                  >
                    Remover do Carrinho
                  </Button>
                )}
                {!favorite && (
                  <div className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 hover:border-gray-200 hover:bg-gray-200 hover:text-red-600 xl:hidden ">
                    <IoMdHeartEmpty
                      className="m-2 h-5 w-5 text-blue-600"
                      onClick={() => addFavorites(code, product)}
                    />
                  </div>
                )}
                {favorite && (
                  <div className=" flex h-fit w-fit cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 text-red-600 hover:border-gray-200 hover:bg-gray-200 xl:hidden">
                    <IoMdHeart
                      className="m-2 h-5 w-5 text-red-600 hover:text-inherit"
                      onClick={() => removeToFavorites(code)}
                    />
                  </div>
                )}
              </div>
              {/* informações do produto */}
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex flex-row md:justify-between">
                  <p className="text-gray-400">Preço:</p>
                  {product.offer && (
                    <div className="flex flex-row items-center gap-3">
                      <p className="text-xs text-red-600 line-through">
                        {Number(product.price).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                      <p className="font-semibold text-green-600">
                        {(
                          Number(product.price) -
                          Number(product.price) * Number(product.discount)
                        ).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                    </div>
                  )}
                  {!product.offer && (
                    <p className="font-semibold text-neutral-600">
                      {Number(product.price).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  )}
                </div>
                <div className=" h-[1px] w-full bg-gray-300"></div>
                <div className="flex flex-row md:justify-between">
                  <p className="text-gray-400">Categoria:</p>
                  <p className="capitalize text-neutral-600">
                    {product.category}
                  </p>
                </div>
                <div className="flex flex-row md:justify-between">
                  <p className="text-gray-400">Código:</p>
                  <p className="text-neutral-600">{product.code}</p>
                </div>
                <div className=" hidden h-[1px] w-full bg-gray-300 lg:flex"></div>
                <div className="hidden flex-row md:justify-between lg:flex">
                  <p className="text-gray-400">Design:</p>
                  <p className="text-neutral-600">Moderno</p>
                </div>
                <div className="hidden flex-row md:justify-between lg:flex">
                  <p className="text-gray-400">Descrição:</p>
                  <p
                    className={`max-w-[408px] text-neutral-600 ${
                      readMore ? '' : 'line-clamp-2'
                    }`}
                  >
                    {product.description}
                  </p>
                </div>
                {!readMore && (
                  <p
                    className="mt-2 hidden w-fit cursor-pointer font-medium text-blue-600 lg:flex"
                    onClick={() => setReadMore(true)}
                  >
                    Ler Mais
                  </p>
                )}
                {readMore && (
                  <p
                    className="mt-2 hidden w-fit cursor-pointer font-medium text-blue-600 lg:flex"
                    onClick={() => setReadMore(false)}
                  >
                    Ler Menos
                  </p>
                )}{' '}
              </div>
            </div>
            <div className="hidden flex-col items-center gap-5 xl:flex">
              <div className="rounded-md border-2 border-gray-300 bg-white p-5 ">
                <div className="flex flex-row items-center gap-2.5">
                  <div className="relative">
                    <img src="/assets/rectangle.png" alt="perfil vendedor" />
                    <p className="absolute left-[30%] top-0 text-[28px] font-semibold text-emerald-400 text-opacity-60">
                      R
                    </p>
                  </div>
                  <div className="flex w-full flex-row items-center justify-between">
                    <div className="text-neutral-900">
                      <p>Supplier</p>
                      <p>Gunji Trading LLC</p>
                    </div>
                  </div>
                </div>
                <div className="my-3 h-[1px] w-full bg-gray-300"></div>
                <div className="flex flex-col items-start justify-evenly gap-2">
                  <div className="flex flex-row items-center gap-1.5 text-neutral-600">
                    <img
                      src="/images/icons/eua.png"
                      alt="icon"
                      className="h-5"
                    />
                    <p>EUA, Nova York</p>
                  </div>
                  <div className="flex flex-row items-center gap-1.5 text-neutral-600">
                    <img
                      src="/images/icons/verified_user.png"
                      alt="icon"
                      className="h-5 w-5"
                    />
                    <p>Vendedor Verificado</p>
                  </div>
                  <div className="flex flex-row items-center gap-1.5 text-neutral-600">
                    <img
                      src="/images/icons/language.png"
                      alt="icon"
                      className="h-5 w-5"
                    />
                    <p>Envio Global</p>
                  </div>
                </div>
                <div className="mt-7 flex flex-col items-center gap-2">
                  <Button className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600">
                    Enviar Consulta
                  </Button>
                  <Button className="mt-2 w-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white">
                    Perfil do vendedor
                  </Button>
                </div>
              </div>
              {!favorite && (
                <Button
                  className="flex w-fit flex-row items-center gap-2 bg-blue-600 text-white hover:bg-white hover:text-blue-600"
                  onClick={() => addFavorites(code, product)}
                >
                  <IoMdHeartEmpty className="h-5 w-5" />
                  <p className="text-base font-medium">
                    Adicionar aos favoritos
                  </p>
                </Button>
              )}
              {favorite && (
                <Button
                  className="flex flex-row items-center gap-2 bg-red-600 text-white hover:bg-white hover:text-red-600"
                  onClick={() => removeToFavorites(code)}
                >
                  <IoMdHeart className=" h-5 w-5 " />
                  <p className="text-base font-medium">Remover dos favoritos</p>
                </Button>
              )}
            </div>
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
                    <img src={product.image} alt={product.name} />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-[80%]">
                  <div className="">
                    <img src={product.image} alt={product.name} />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          {/* Informações mobile */}
          <div className="flex flex-col border-b-2 border-gray-300 bg-white p-4 md:hidden">
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
                <p className="text-sm text-zinc-500">154 vendidos</p>
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
              {!inCart && (
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600"
                  onClick={() => addToCart(code, product)}
                >
                  Adicionar ao Carrinho
                </Button>
              )}
              {inCart && (
                <Button
                  className="w-full bg-red-600 text-white hover:bg-white hover:text-red-600"
                  onClick={() => removeItemFromCart(code)}
                >
                  Remover do Carrinho
                </Button>
              )}
              {!favorite && (
                <div className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 hover:border-gray-200 hover:bg-gray-200 hover:text-red-600">
                  <IoMdHeartEmpty
                    className="m-2 h-5 w-5 text-blue-600"
                    onClick={() => addFavorites(code, product)}
                  />
                </div>
              )}
              {favorite && (
                <div className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 text-red-600 hover:border-gray-200 hover:bg-gray-200">
                  <IoMdHeart
                    className="m-2 h-5 w-5 text-red-600 hover:text-inherit"
                    onClick={() => removeToFavorites(code)}
                  />
                </div>
              )}
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
          {/* seller mobile */}
          <div className="m-2.5 rounded-md border-2 border-gray-300 bg-white p-2.5 md:hidden">
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
                      <div
                        className="flex h-fit max-w-[150px] cursor-pointer flex-col gap-2 rounded-md border-2 border-gray-300 bg-white px-3 pb-4 pt-2"
                        onClick={() => router.push(`/products/${product.code}`)}
                      >
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
