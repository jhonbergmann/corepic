import {TextInput} from 'react-native'
import styled from 'styled-components/native'

import {InputLayoutProps} from '@/components/ui/input/data'

const InputUI = styled(TextInput).attrs<InputLayoutProps>(({theme}) => ({placeholderTextColor: theme.colors.placeholder}))`
  padding: 15px;
  height: 55px;
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: ${({theme}) => theme.fontSizes.medium}px;
  border-radius: ${({theme}) => theme.borderRadius.medium}px;
  border: 1px solid;
  border-color: ${({theme, isError, isFocused}) => (isError ? theme.colors.error : isFocused ? theme.colors.primary : theme.colors.border)};
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
  width: 100%;
`

export default InputUI
