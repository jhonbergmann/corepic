import {useEffect, useRef, useState} from 'react'
import {TextInput} from 'react-native'
import {useInfiniteQuery} from '@tanstack/react-query'
import {useNavigation, useRoute} from '@react-navigation/native'

import {SearchProps} from '@/screens/app/tabs/search/data'
import {Search as Layout} from '@/screens/app/tabs/search/layout'
import {AppTabsRoutes} from '@/routes/app.tabs.routes'
import {AppNavigatorRoutesProps} from '@/routes/app.routes'
import {fetchImages} from '@/services/api/images'

export const Search = (props: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const route = useRoute()
  const params = route.params as AppTabsRoutes['search']

  const inputRef = useRef<TextInput | null>(null)

  useEffect(() => {
    setSearchTerm(params?.category || '')
    if (params?.focused) setTimeout(() => inputRef.current?.focus(), 100)
  }, [params])

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading} = useInfiniteQuery({
    queryKey: ['images', searchTerm],
    queryFn: ({pageParam = 1}) => fetchImages({pageParam, query: searchTerm || 'popular'}),
    getNextPageParam: (lastPage, pages) => (lastPage?.results?.length ? pages.length + 1 : undefined),
    initialPageParam: 1,
    retry: false,
  })

  const handleSearch = () => refetch()

  const images = data?.pages.flatMap((page) => page.results) || []

  const layoutProps = {
    ...props,
    navigation,
    inputRef,
    images,
    searchTerm,
    setSearchTerm,
    handleSearch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    loading: isLoading,
  }

  return <Layout {...layoutProps} />
}
