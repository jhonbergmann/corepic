import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {useNavigation} from '@react-navigation/native'
import {FirebaseError} from 'firebase/app'

import {SignUpProps} from '@/screens/auth/sign-up/data'
import {SignUp as Layout} from '@/screens/auth/sign-up/layout'
import {schema, SignUpSchema, defaultValues} from '@/screens/auth/sign-up/schema'
import {AuthNavigatorRoutesProps} from '@/routes/auth.routes'
import {useFirebaseError} from '@/hooks'
import {useToast} from '@/contexts/toast'
import {signUp} from '@/services/api/sign-up'
import {useAuth} from '@/contexts/auth'

export const SignUp = (props: SignUpProps) => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {addToast} = useToast()
  const {handleError} = useFirebaseError()
  const {setUser} = useAuth()

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const signUpMutation = () => {
    return useMutation({
      mutationFn: signUp,
      onSuccess: (user) => {
        setUser({
          uid: user.uid,
          email: user.email ?? '',
          displayName: user.displayName ?? '',
          photoURL: user.photoURL ?? '',
        })
        addToast({message: 'Cadastro realizado com sucesso.', type: 'success'})
      },
      onError: (error: FirebaseError) => {
        addToast({message: handleError(error.code) || 'Ocorreu um erro inesperado. Tente novamente.', type: 'error'})
      },
    })
  }

  const {mutateAsync: createAccount, isPending} = signUpMutation()

  const submit = async (data: SignUpSchema) => await createAccount(data)

  const layoutProps = {
    ...props,
    loading: isPending,
    navigation,
    control,
    handleSubmit,
    submit,
    errors,
  }

  return <Layout {...layoutProps} />
}
