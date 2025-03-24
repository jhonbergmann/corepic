import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {useNavigation} from '@react-navigation/native'
import {FirebaseError} from 'firebase/app'

import {SignInProps} from '@/screens/auth/sign-in/data'
import {SignIn as Layout} from '@/screens/auth/sign-in/layout'
import {schema, SignInSchema, defaultValues} from '@/screens/auth/sign-in/schema'
import {AuthNavigatorRoutesProps} from '@/routes/auth.routes'

import {useFirebaseError} from '@/hooks'
import {useToast} from '@/contexts/toast'
import {signIn} from '@/services/api/sign-in'
import {useAuth} from '@/contexts/auth'

export const SignIn = (props: SignInProps) => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {addToast} = useToast()
  const {handleError} = useFirebaseError()
  const {setUser} = useAuth()

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const signInMutation = () => {
    return useMutation({
      mutationFn: signIn,
      onSuccess: (user) => {
        setUser({
          uid: user.uid,
          email: user.email ?? '',
          displayName: user.displayName ?? '',
          photoURL: user.photoURL ?? '',
        })
        addToast({message: 'Login realizado com sucesso.', type: 'success'})
      },
      onError: (error: FirebaseError) => {
        addToast({message: handleError(error.code) || 'Ocorreu um erro inesperado. Tente novamente.', type: 'error'})
      },
    })
  }

  const {mutateAsync: accessAccount, isPending} = signInMutation()

  const submit = async (data: SignInSchema) => await accessAccount(data)

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
