'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useCart } from '@/hooks/useCart'

const Payment = () => {
  const cart = useCart((state) => state.cart)
  const subtotal = cart.products.reduce(
    (acc, product) =>
      acc + parseFloat(product.price.replace('R$ ', '')) * product.quantity,
    0,
  )

  const discount =
    subtotal *
    cart.products.reduce(
      (acc, product) => acc + parseFloat(product.discount),
      0,
    )

  const tax = subtotal * 0.005

  const total = subtotal - discount + tax

  return (
    <div className="flex h-fit flex-col items-center justify-start gap-3">
      <div className="hidden flex-col gap-2 rounded-md bg-white p-5 lg:flex lg:shadow-md">
        <p className="text-base font-normal text-neutral-600">Have a coupon?</p>
        <div className="flex flex-row items-center justify-center">
          <Input
            placeholder="Add coupon"
            className="rounded-r-none py-3 placeholder:text-gray-400"
          />
          <Button className="rounded-l-none border border-gray-300 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white">
            Apply
          </Button>
        </div>
      </div>
      <div className="w-full rounded-md bg-white p-4 py-5 lg:w-[280px] lg:shadow-md">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between ">
            <p className="text-gray-400">Subtotal:</p>
            <p className="text-right font-medium text-zinc-900">
              {subtotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between ">
            <p className="text-gray-400">Discount:</p>
            <p className="text-right font-medium text-red-600">
              <span>- {'   '}</span>
              {discount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between ">
            <p className="text-gray-400">Tax:</p>
            <p className="text-right font-medium text-green-600">
              <span>+ {'   '}</span>
              {tax.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <p className="text-right text-lg font-semibold text-zinc-900">
              Total:
            </p>
            <p className="text-right text-lg font-semibold text-zinc-900">
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <Button className="w-full bg-green-600 py-5 text-center text-base font-medium text-white hover:bg-green-700">
            Checkout{' '}
            <span className="ml-1 lg:hidden">({cart.products.length})</span>
          </Button>
        </div>
        <div className="mt-6 flex w-full flex-row items-center justify-center gap-2">
          <img src="/images/cards/amex.png" alt="Amex" />
          <img src="/images/cards/applepay.png" alt="" />
          <img src="/images/cards/mastercard.png" alt="" />
          <img src="/images/cards/pp.png" alt="" />
          <img src="/images/cards/visa.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Payment
