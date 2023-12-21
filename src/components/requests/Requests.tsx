import React from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

const Requests = () => {
  return (
    <div className="w-full rounded-md bg-opacity-5 bg-[url('/assets/bg-estoque.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative flex h-full w-full items-start justify-between gap-5 rounded-md bg-blue-500 bg-opacity-70 from-blue-500 to-cyan-400 pb-9 pl-6 pr-6 pt-7 lg:flex-row">
        <div className="flex h-full w-full flex-col items-start justify-center gap-5 opacity-100 lg:mt-3 lg:max-w-[390px]">
          <p className="text-lg font-semibold text-white lg:text-[32px]">
            Uma maneira fácil de enviar solicitações a todos os fornecedores
          </p>
          <p className="hidden text-white lg:flex">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
          <Button className="rounded-md bg-gradient-to-b from-blue-600 to-blue-500 px-3 py-2 text-[13px] text-white hover:from-blue-600 hover:to-blue-600 lg:hidden">
            Enviar consulta
          </Button>
        </div>
        <div className="hidden rounded-sm bg-white py-6 pl-5 pr-8 lg:flex">
          <div>
            <h1 className="mb-5 text-xl font-semibold leading-7 text-zinc-900">
              Enviar cotação aos fornecedores
            </h1>
            <form className="flex flex-col items-start gap-5">
              <Input
                type="text"
                placeholder="Qual produto você precisa?"
                className="border-gray-300 p-3 text-zinc-900 placeholder:text-zinc-900"
              />
              <Textarea
                placeholder="Fale mais detalhes"
                className="w-full border-gray-300"
              />
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="Quantidade"
                  className="border-gray-300 p-3 text-zinc-900 placeholder:text-zinc-900"
                />
                <Select>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Categoria"
                      className="max-w-[158px]"
                    />
                  </SelectTrigger>
                  <SelectContent className="min-w-[158px]">
                    <SelectItem className="min-w-[158px]" value="roupas">
                      Roupas
                    </SelectItem>
                    <SelectItem value="livros">Livros</SelectItem>
                    <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="rounded-md bg-gradient-to-b from-blue-600 to-blue-500 px-3 py-2 text-[13px] text-white hover:from-blue-600 hover:to-blue-600">
                Enviar Consulta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Requests
