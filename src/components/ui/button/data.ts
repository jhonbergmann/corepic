import {SpaceProps} from 'styled-system'

export interface ButtonProps extends StyledSystemProps {
  variant?: ButtonVariants
  loading?: boolean
  title?: string
  onPress?: () => void
  disabled?: boolean
  children?: JSX.Element
}

export interface ButtonLayoutProps extends ButtonProps {}

type StyledSystemProps = SpaceProps

type ButtonVariants = 'solid' | 'outline' | 'disabled'
