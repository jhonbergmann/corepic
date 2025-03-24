import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter'

import {Routes} from '@/routes'
import {Conditional, Spinner, Wrapped} from '@/components'
import AppProviders from '@/providers/app-providers'

export default function App() {
  const queryClient = new QueryClient()

  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold})

  return (
    <AppProviders>
      <QueryClientProvider client={queryClient}>
        <Conditional render={!fontsLoaded}>
          <Wrapped flex={1} center>
            <Spinner />
          </Wrapped>
          <Routes />
        </Conditional>
      </QueryClientProvider>
    </AppProviders>
  )
}
