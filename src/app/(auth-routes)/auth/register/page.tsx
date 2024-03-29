'use client'

import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useRegisterUser } from '@/hooks'

const Home = () => {
  const router = useRouter()
  const { register, handleSubmit, errors, handleFormSubmit } = useRegisterUser()

  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
          <div className="w-full">
            {/* Cabeçalho */}
            <div className="mb-7 flex w-full flex-col items-start justify-center">
              <p className="text-base font-medium text-gray-900">Bem Vindo</p>
              <h1 className="text-2xl font-semibold text-gray-900">
                Crie sua conta
              </h1>
            </div>

            {/* Formulário */}
            <form
              id="register"
              className="mb-6 flex flex-col gap-5"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div className="flex flex-col gap-3">
                <label
                  className="text-sm font-normal text-gray-900"
                  htmlFor="credentials.name"
                >
                  Nome
                </label>
                <Input
                  {...register('credentials.name')}
                  type="text"
                  name="credentials.name"
                  placeholder="Seu Nome"
                  className={`border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500 ${
                    errors.credentials?.name ? 'border-red-500' : ''
                  }`}
                  autoComplete="off"
                />
                {errors.credentials?.name?.message && (
                  <p className="text-xs text-red-500 ">
                    {errors.credentials?.name?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label
                  className="text-sm font-normal text-gray-900"
                  htmlFor="credentials.email"
                >
                  Email
                </label>
                <Input
                  {...register('credentials.email')}
                  type="text"
                  name="credentials.email"
                  placeholder="exemplo@gmail.com"
                  className={`border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500 ${
                    errors.credentials?.email ? 'border-red-500' : ''
                  }`}
                  autoComplete="off"
                />
                {errors.credentials?.email?.message && (
                  <p className="text-xs text-red-500 ">
                    {errors.credentials?.email?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-sm font-normal text-gray-900"
                  htmlFor="credentials.password"
                >
                  Senha
                </label>
                <Input
                  {...register('credentials.password')}
                  type="password"
                  name="credentials.password"
                  placeholder="0123456789"
                  className={`border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500 ${
                    errors.credentials?.password ? 'border-red-500' : ''
                  }`}
                  autoComplete="off"
                />
                {errors.credentials?.password?.message && (
                  <p className="text-xs text-red-500 ">
                    {errors.credentials?.password?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="credentials.confirmPassword"
                  className="text-sm font-normal text-gray-900"
                >
                  Confirmar Senha
                </label>
                <Input
                  {...register('credentials.confirmPassword')}
                  type="password"
                  name="credentials.confirmPassword"
                  placeholder="0123456789"
                  className={`border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500 ${
                    errors.credentials?.confirmPassword ? 'border-red-500' : ''
                  }`}
                  autoComplete="off"
                />
                {errors.credentials?.confirmPassword?.message && (
                  <p className="text-xs text-red-500 ">
                    {errors.credentials?.confirmPassword?.message}
                  </p>
                )}
              </div>
            </form>

            <Button
              className="mb-6 h-auto w-full bg-blue-500 px-8 py-3 hover:bg-blue-600"
              form="register"
            >
              Cadastrar
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
                Já tem conta?{' '}
                <span
                  className="cursor-pointer text-base font-medium text-emerald-600"
                  onClick={() => router.push('/auth')}
                >
                  Entrar
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
