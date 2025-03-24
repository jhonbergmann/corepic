import * as React from 'react'
import {Children} from 'react'

import {ConditionalProps} from '@/components/common/conditional/data'

export const Conditional = ({children, render}: ConditionalProps): JSX.Element => {
  const [first, second] = Children.toArray(children)
  return <>{render ? first : second ? second : <></>}</>
}
