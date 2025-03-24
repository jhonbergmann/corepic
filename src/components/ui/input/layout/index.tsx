import {forwardRef, useState} from 'react'
import {TextInput} from 'react-native'

import {InputProps} from '@/components/ui/input/data'
import InputUI from '@/components/ui/input/layout/styles'
import {Wrapped} from '@/components/ui/wrapped'
import {Text} from '@/components/ui/text'
import {Conditional} from '@/components/common'
import {useTheme} from '@/contexts/theme'

export const Input = forwardRef<TextInput, InputProps>(({value, title, error, ...props}, ref) => {
  const [isFocused, setIsFocused] = useState(false)
  const {theme} = useTheme()

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <Wrapped gap={4} bg="transparent">
      <Conditional render={Boolean(title)}>
        <Text fontSize={theme.fontSizes.small}>{title}</Text>
      </Conditional>
      <InputUI {...props} ref={ref} value={value} onFocus={handleFocus} onBlur={handleBlur} isFocused={isFocused} isError={Boolean(error)} />
      <Conditional render={Boolean(error)}>
        <Text textAlign="right" color={theme.colors.error} fontSize={theme.fontSizes.small}>
          {error}
        </Text>
      </Conditional>
    </Wrapped>
  )
})
