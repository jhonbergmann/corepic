import {Animated} from 'react-native'
import styled, {css} from 'styled-components/native'

import {Theme} from '@/themes'

const toastStyles = (theme: Theme) =>
  ({
    success: css`
      background-color: ${theme.colors.success};
    `,
    error: css`
      background-color: ${theme.colors.error};
    `,
    warning: css`
      background-color: ${theme.colors.warning};
    `,
    info: css`
      background-color: ${theme.colors.info};
    `,
  }) as const

export const Container = styled.View`
  position: absolute;
  top: 25px;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;
`

type ToastType = 'success' | 'error' | 'warning' | 'info'

export const AnimatedToast = styled(Animated.View)<{type: ToastType}>`
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
  padding: 15px 20px;
  border-radius: 8px;
  min-width: 90%;
  ${({type, theme}) => toastStyles(theme as Theme)[type]}
`

export const IconContainer = styled.View`
  margin-right: 10px;
`

export const ContentContainer = styled.View`
  flex: 1;
`

export const ToastTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`

export const ToastMessage = styled.Text`
  color: white;
  font-size: 14px;
`
