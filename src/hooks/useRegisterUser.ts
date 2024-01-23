import { formRegisterProps, errorProps } from '@/@types'
import { schemaFormRegister } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import router from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useRegisterUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formRegisterProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaFormRegister),
    defaultValues: {
      credentials: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    },
  })

  const handleFormSubmit = (data: formRegisterProps) => {
    const register = async () => {
      try {
        await axios
          .post('http://localhost:3000/users', {
            name: data.credentials.name,
            email: data.credentials.email,
            password: data.credentials.password,
          })
          .then((res) => {
            if (res.status === 201) {
              toast.success('Conta criada com sucesso')
              router.push('/auth')
            }
            console.log(res)
          })
      } catch (error) {
        if (
          (error as errorProps).response.data.message === 'Email already exists'
        ) {
          toast.error('Email já cadastrado')
        }
      }
    }
    register()
  }

  return {
    handleFormSubmit,
    register,
    errors,
    handleSubmit,
  }
}
