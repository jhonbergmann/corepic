import {Control, SubmitHandler, FormState} from 'react-hook-form'

import {AuthNavigatorRoutesProps} from '@/routes/auth.routes'
import {SignInSchema} from '@/screens/auth/sign-in/schema'

export interface SignInProps {}

export interface SignInLayoutProps extends SignInProps {
  loading: boolean
  navigation: AuthNavigatorRoutesProps
  control: Control<SignInSchema>
  handleSubmit: (onValid: SubmitHandler<SignInSchema>) => (e?: React.BaseSyntheticEvent) => void
  submit: SubmitHandler<SignInSchema>
  errors: FormState<SignInSchema>['errors']
}
