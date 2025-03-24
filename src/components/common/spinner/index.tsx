import React from 'react'
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native'

import {useTheme} from '@/contexts/theme'

type SpinnerProps = ActivityIndicatorProps

export const Spinner = ({size = 'large', color, ...props}: SpinnerProps) => {
  const {theme} = useTheme()

  return <ActivityIndicator size={size} color={color || theme.colors.primary} {...props} />
}
