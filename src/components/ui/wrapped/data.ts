import {ViewStyle, ViewProps} from 'react-native'
import {BorderProps, BoxShadowProps, ColorProps, FlexboxProps, SpaceProps, TypographyProps, LayoutProps, PositionProps} from 'styled-system'

import {Theme} from '@/themes'

export interface WrappedProps extends ViewProps, StyledSystemProps {
  children?: React.ReactNode
  center?: boolean
  style?: ViewStyle
  gap?: number
  bg?: keyof Theme['colors']
}

export interface WrappedLayoutProps extends WrappedProps {}

type StyledSystemProps = BorderProps & PositionProps & BoxShadowProps & ColorProps & FlexboxProps & SpaceProps & TypographyProps & LayoutProps
