import {Text} from 'react-native'
import styled from 'styled-components/native'
import {color, space, layout, typography} from 'styled-system'

import {TextLayoutProps} from '@/components/ui/text/data'

const TextUI = styled(Text)<TextLayoutProps>`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: ${({textSize, theme}) => (textSize && theme.fontSizes[textSize]) || theme.fontSizes.medium}px;

  ${color}
  ${space}
  ${layout}
  ${typography}
`

export default TextUI
