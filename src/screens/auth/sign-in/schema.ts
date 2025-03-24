import * as z from 'zod'

export const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um email válido'),
  password: z.string().min(1, 'Senha é obrigatória').min(6, 'A senha precisa ter no mínimo 6 dígitos'),
})

export type SignInSchema = z.infer<typeof schema>

export const defaultValues = {email: '', password: ''}
