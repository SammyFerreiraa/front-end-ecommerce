import {
  ProductCartProps,
  ProductProps,
  cartProps,
  favoritesProps,
} from '@/@types'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useProductsCart = (
  cart: cartProps,
  favorites: favoritesProps,
  token: string | undefined,
  setQuantity: (productCode: string, quantity: number) => void,
  removeProduct: (productCode: string) => void,
  setEmpty: (empty: boolean) => void,
  removeAllProducts: (cartId: string) => void,
  addProduct: (product: ProductProps) => void,
  setFavoritesEmpty: (favoritesEmpty: boolean) => void,
) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL || ''
  // mudar quantidade de um item do carrinho
  const changeQuantity = (productCode: string, quantity: number) => {
    setQuantity(productCode, quantity)
    if (!token) return
    const req = async () => {
      await axios.post(
        `${url}/cart/update/quantity`,
        {
          quantity,
          productCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
    }
    req()
  }

  // remover um item total do carrinho
  const removeItemFromCart = (productCode: string) => {
    removeProduct(productCode)
    if (cart.products.length === 1) setEmpty(true)
    toast.info('Produto removido com sucesso!', {
      pauseOnHover: false,
      theme: 'colored',
    })
    if (!token) return
    const req = async () => {
      await axios.delete(`${url}/cart/remove/item`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          productCode,
        },
      })
    }
    req()
  }

  // remover um da quantidade desse produto
  const removeOne = (productCode: string, cartId: string) => {
    const quantity =
      (cart.products.find((p) => p.code === productCode)?.quantity ?? 0) - 1

    setQuantity(productCode, quantity)
    if (quantity === 0) {
      removeProduct(productCode)
    }
    if (cart.products.length === 1 && quantity === 0) setEmpty(true)

    if (!token) return
    const req = async () => {
      await axios.delete(`${url}/cart/remove`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          cartId,
          productCode,
        },
      })
    }
    req()
  }

  // adicionar um a quantidade desse produto
  const addOne = (productCode: string) => {
    try {
      setQuantity(
        productCode,
        (cart.products.find((p) => p.code === productCode)?.quantity ?? 0) + 1,
      )

      if (!token) return

      const req = async () => {
        await axios.post(
          `${url}/cart/update/quantity`,
          {
            quantity:
              (cart.products.find((p) => p.code === productCode)?.quantity ??
                0) + 1,
            productCode,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
      }
      req()
    } catch (error) {
      console.error('Erro na solicitação:', error)
    }
  }

  // excluir todo o carrinho
  const clearCart = () => {
    removeAllProducts(cart.id)
    setEmpty(true)
    if (!token) return
    toast.success('Carrinho limpo com sucesso', {
      pauseOnHover: false,
      theme: 'colored',
    })

    const req = async () => {
      await axios.delete(`${url}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          cartId: cart.id,
        },
      })
    }
    req()
  }

  // Adicionar aos favoritos
  const saveForLater = (code: string, product: ProductCartProps) => {
    if (favorites.products.find((p) => p.code === code)) {
      toast.info('Já foi adicionado aos favoritos', {
        pauseOnHover: false,
        theme: 'colored',
      })
      return
    }
    const { quantity, ...productAdd } = product
    const productToAdd: ProductProps = {
      ...productAdd,
      availableQuantity: 50 - quantity,
    }
    addProduct(productToAdd)
    setFavoritesEmpty(false)

    toast.success('Adicionado aos favoritos', {
      pauseOnHover: false,
      theme: 'colored',
    })

    if (!token) return
    const req = async () => {
      await axios.post(
        `${url}/favorites`,
        {
          favoriteId: favorites.id,
          productCode: code,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
    }
    req()
  }

  return {
    changeQuantity,
    removeItemFromCart,
    removeOne,
    addOne,
    clearCart,
    saveForLater,
  }
}
