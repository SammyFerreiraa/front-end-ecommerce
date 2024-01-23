'use client'

import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { useLoginUser } from '@/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()
  const { register, handleFormSubmit, handleSubmit } = useLoginUser()

  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
          <div className="w-full">
            {/* Cabeçalho */}
            <div className="mb-7 flex w-full flex-col items-start justify-center">
              <p className="text-base font-medium text-gray-900">
                Bem vindo de volta
              </p>
              <h1 className="text-2xl font-semibold text-gray-900">
                Acesse sua conta
              </h1>
            </div>

            {/* Formulário */}
            <form
              className="mb-6 flex flex-col gap-5"
              id="login"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="credentials.email"
                  className="text-sm font-normal text-gray-900"
                >
                  Email
                </label>
                <Input
                  {...register('credentials.email')}
                  type="text"
                  placeholder="exemplo@gmail.com"
                  name="credentials.email"
                  className="border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="credentials.email"
                  className="text-sm font-normal text-gray-900"
                >
                  Senha
                </label>
                <Input
                  {...register('credentials.password')}
                  type="password"
                  placeholder="0123456789"
                  name="credentials.password"
                  className="border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500"
                  autoComplete="off"
                />
              </div>
            </form>
            <div className="mb-8 flex w-full flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-between gap-2">
                <Checkbox />
                <p className="text-sm font-medium text-gray-900">
                  Lembre de mim
                </p>
              </div>
              <p className="cursor-pointer text-right text-sm font-medium text-blue-500">
                Esqueceu sua senha?
              </p>
            </div>
            <Button
              className="mb-6 h-auto w-full bg-blue-500 px-8 py-3 hover:bg-blue-600"
              form="login"
            >
              Entrar
            </Button>
            <Button className=" mb-10 flex h-auto w-full flex-row gap-3 bg-gray-900 px-8 py-3 hover:bg-gray-950">
              <img
                src="/assets/googleicon.png"
                className="h-6 w-6"
                alt="Google"
              />
              <p>Ou faça login com o Google</p>
            </Button>
            <div className="w-full text-center">
              <p className="text-base font-medium text-gray-900">
                Não tem conta?{' '}
                <span
                  className="cursor-pointer text-base font-medium text-emerald-600"
                  onClick={() => {
                    router.push('/auth/register')
                  }}
                >
                  Crie sua conta
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Home
