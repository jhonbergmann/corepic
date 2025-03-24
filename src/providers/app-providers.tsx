import React, {ReactNode} from 'react'

import {ThemeProvider} from '@/contexts/theme'
import {ToastProvider} from '@/contexts/toast'
import {AuthProvider} from '@/contexts/auth'
import {CartProvider} from '@/contexts/cart'

const providers = [ThemeProvider, ToastProvider, AuthProvider, CartProvider]

interface AppProvidersProps {
  children: ReactNode
}

const AppProviders = ({children}: AppProvidersProps) => {
  const providersStack = providers.reduceRight((AccumulatedProviders, Provider) => {
    return <Provider>{AccumulatedProviders}</Provider>
  }, children)

  return <>{providersStack}</>
}

export default AppProviders
