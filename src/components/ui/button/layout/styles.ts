import {TouchableOpacity as ButtonBase, Text as TextBase} from 'react-native'
import styled from 'styled-components/native'
import {space, variant} from 'styled-system'

import {ButtonLayoutProps} from '@/components/ui/button/data'
import {Theme} from '@/themes'

export const Button = styled(ButtonBase)<ButtonLayoutProps>`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  height: 55px;
  opacity: ${({disabled}) => (disabled ? 0.7 : 1)};

  ${space};
`

export const Text = styled(TextBase)`
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSizes.medium}px;
  font-family: ${({theme}) => theme.fonts.primary};
`

const getButtonUI = (theme: Theme) => ({
  ButtonUI: styled(Button)(
    variant({
      variants: {
        solid: {
          backgroundColor: theme.colors.primary,
        },
        outline: {
          backgroundColor: theme.colors.transparent,
          border: `1px solid ${theme.colors.border}`,
        },
        disabled: {},
      },
    }),
  ),
})

const geTextUI = (theme: Theme) => ({
  TextUI: styled(Text)(
    variant({
      variants: {
        solid: {
          color: theme.colors.buttonText,
        },
        outline: {
          color: theme.colors.text,
        },
        disabled: {},
      },
    }),
  ),
})

export {getButtonUI, geTextUI}
