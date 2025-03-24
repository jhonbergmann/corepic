import {z} from 'zod'

export const schema = z
  .object({
    email: z.string().email('Informe um email válido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 dígitos'),
    confirmPassword: z.string().min(6, 'A confirmação de senha deve ter no mínimo 6 dígitos'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type SignUpSchema = z.infer<typeof schema>

export const defaultValues: SignUpSchema = {
  email: '',
  password: '',
  confirmPassword: '',
}
