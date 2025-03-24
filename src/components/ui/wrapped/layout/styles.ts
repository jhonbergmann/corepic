import {View} from 'react-native'
import styled, {css} from 'styled-components/native'
import {color, space, flexbox, border, typography, boxShadow} from 'styled-system'

import {WrappedLayoutProps} from '@/components/ui/wrapped/data'

const Wrapped = styled(View)<WrappedLayoutProps>`
  ${({center}) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${space};
  ${color};
  ${typography};
  ${border};
  ${flexbox};
  ${boxShadow};
`

export default Wrapped
