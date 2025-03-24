import {TextProps} from '@/components/ui/text/data'
import TextUI from '@/components/ui/text/layout/styles'

export const Text = ({children, ...props}: TextProps) => {
  return <TextUI {...props}>{children}</TextUI>
}
