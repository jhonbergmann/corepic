import {Control, SubmitHandler, FormState} from 'react-hook-form'

import {AuthNavigatorRoutesProps} from '@/routes/auth.routes'
import {SignUpSchema} from '@/screens/auth/sign-up/schema'

export interface SignUpProps {}

export interface SignUpLayoutProps extends SignUpProps {
  loading: boolean
  navigation: AuthNavigatorRoutesProps
  control: Control<SignUpSchema>
  handleSubmit: (onValid: SubmitHandler<SignUpSchema>) => (e?: React.BaseSyntheticEvent) => void
  submit: SubmitHandler<SignUpSchema>
  errors: FormState<SignUpSchema>['errors']
}
