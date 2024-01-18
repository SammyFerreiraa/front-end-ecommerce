'use client'

import { MaxWidthWrapper } from '@/components'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const router = useRouter()

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
            <form className="mb-6 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-sm font-normal text-gray-900"
                >
                  Nome
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </div>

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
                  autoComplete="off"
                />
              </div>
            </form>

            <Button className="mb-6 h-auto w-full bg-blue-500 px-8 py-3 hover:bg-blue-600">
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
