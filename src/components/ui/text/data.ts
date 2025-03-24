import {ColorProps, SpaceProps, LayoutProps, TypographyProps} from 'styled-system'
import {TextProps as RNTextProps} from 'react-native'

import {FontSizeKey} from '@/themes/tokens'

export interface TextProps extends StyledSystemProps, RNTextProps {
  children: React.ReactNode
  textSize?: FontSizeKey
  onPress?: () => void
}

export interface TextLayoutProps extends TextProps {}

type StyledSystemProps = ColorProps & SpaceProps & LayoutProps & TypographyProps
