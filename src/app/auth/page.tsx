'use client'

import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import React, { useCallback, useState } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const login = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (res?.error) {
        return
      }
      window.location.href = '/'
    },
    [email, password],
  )

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login',
    )
  }, [setVariant])

  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
          <div className="w-full">
            {/* Cabeçalho */}
            <div className="mb-7 flex w-full flex-col items-start justify-center">
              <p className="text-base font-medium text-gray-900">
                {variant === 'login' ? 'Bem vindo de volta' : 'Bem vindo'}
              </p>
              <h1 className="text-2xl font-semibold text-gray-900">
                {variant === 'login' ? 'Acesse sua conta' : 'Crie sua conta'}
              </h1>
            </div>

            {/* Formulário */}
            <form className="mb-6 flex flex-col gap-5">
              {variant === 'register' && (
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-normal text-gray-900"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    value={name}
                    placeholder="Seu Nome"
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    id="name"
                    className="border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500"
                  />
                </div>
              )}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-sm font-normal text-gray-900"
                >
                  Email
                </label>
                <Input
                  type="text"
                  value={email}
                  placeholder="exemplo@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-sm font-normal text-gray-900"
                >
                  Senha
                </label>
                <Input
                  type="password"
                  value={password}
                  placeholder="0123456789"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  className="border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500"
                />
              </div>
              {variant === 'register' && (
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-normal text-gray-900"
                  >
                    Confirmar Senha
                  </label>
                  <Input
                    type="text"
                    value={confirmPassword}
                    placeholder="0123456789"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="border-gray-200 bg-slate-50 p-4 placeholder:text-neutral-500"
                  />
                </div>
              )}
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
              onClick={login}
              className="mb-6 h-auto w-full bg-blue-500 px-8 py-3 hover:bg-blue-600"
            >
              {variant === 'login' ? 'Entrar' : 'Cadastrar'}
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
                  onClick={toggleVariant}
                  className="cursor-pointer text-base font-medium text-emerald-600"
                >
                  Cadastre-se
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
