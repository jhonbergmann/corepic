import {forwardRef} from 'react'
import {TextInput} from 'react-native'

import {InputProps} from '@/components/ui/input/data'
import {Input as Layout} from '@/components/ui/input/layout'

export const Input = forwardRef((props: InputProps, ref: React.Ref<TextInput>) => <Layout ref={ref as React.Ref<TextInput>} {...props} />)
