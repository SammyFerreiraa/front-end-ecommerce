import { formLoginProps } from '@/@types'
import { schemaFormLogin } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useLoginUser = () => {
  const { register, handleSubmit } = useForm<formLoginProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaFormLogin),
    defaultValues: {
      credentials: {
        password: '',
        email: '',
      },
    },
  })

  const handleFormSubmit = (data: formLoginProps) => {
    const login = async () => {
      await signIn('credentials', {
        email: data.credentials.email,
        password: data.credentials.password,
        redirect: false,
      }).then((res) => {
        if (res?.status === 401) toast.error('Email ou senha incorreta')
        if (res?.status === 200) window.location.href = '/'
      })
    }
    login()
  }

  return {
    register,
    handleSubmit,
    handleFormSubmit,
  }
}
