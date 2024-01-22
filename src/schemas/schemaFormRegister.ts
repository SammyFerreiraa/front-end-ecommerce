import { z } from 'zod'

export const schemaFormRegister = z.object({
  credentials: z
    .object({
      name: z.string().refine((value) => /^[A-Za-z\s]+$/.test(value), {
        message: 'Usuário invalido',
      }),
      email: z
        .string()
        .email('E-mail invalido')
        .toLowerCase()
        .refine(
          (email) => {
            const domain = email.split('@')[1]
            return domain && domain.toLowerCase() === 'gmail.com'
          },
          {
            message: 'O email deve ter o domínio @gmail.com',
          },
        ),
      password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
      confirmPassword: z.string(),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
      path: ['confirmPassword'],
      message: 'As senhas não conferem',
    }),
})
