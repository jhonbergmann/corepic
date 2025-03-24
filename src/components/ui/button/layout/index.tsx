import {Conditional, Spinner} from '@/components/common'
import {ButtonLayoutProps} from '@/components/ui/button/data'
import {getButtonUI, geTextUI} from '@/components/ui/button/layout/styles'
import {useTheme} from '@/contexts/theme'

export const Button = ({variant, children, loading, title = '', onPress = () => {}, disabled = variant === 'disabled' || false, ...props}: ButtonLayoutProps) => {
  const {theme} = useTheme()

  const {ButtonUI} = getButtonUI(theme)
  const {TextUI} = geTextUI(theme)

  return (
    <ButtonUI {...{...props, variant}} {...(onPress && !disabled && {onPress: onPress})} disabled={loading ? true : disabled}>
      <Conditional render={Boolean(loading)}>
        <Spinner size="small" />
        {children || <TextUI {...{variant}}>{title}</TextUI>}
      </Conditional>
    </ButtonUI>
  )
}
