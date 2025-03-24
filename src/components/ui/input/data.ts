import {Ref} from 'react'
import {TextInput, TextInputProps} from 'react-native'

export interface InputProps extends TextInputProps {
  ref?: Ref<TextInput>
  title?: string
  error?: string
  secureTextEntry?: boolean
}

export interface InputLayoutProps extends InputProps {
  isFocused: boolean
  isError: boolean
}
