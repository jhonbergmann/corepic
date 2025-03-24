import {WrappedLayoutProps} from '@/components/ui/wrapped/data'
import WrappedUI from '@/components/ui/wrapped/layout/styles'
import {useTheme} from '@/contexts/theme'

export const Wrapped = ({children = <></>, bg = 'background', ...props}: WrappedLayoutProps) => {
  const {theme} = useTheme()

  return (
    <WrappedUI bg={theme.colors[bg] as keyof typeof theme.colors} {...props}>
      {children}
    </WrappedUI>
  )
}
