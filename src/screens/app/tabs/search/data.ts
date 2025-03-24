import {TextInput} from 'react-native'

import {AppNavigatorRoutesProps} from '@/routes/app.routes'
import {FetchImages} from '@/services/api/interfaces/images'

export interface SearchProps {}

export interface SearchLayoutProps extends SearchProps {
  navigation: AppNavigatorRoutesProps
  inputRef: React.MutableRefObject<TextInput | null>
  images: FetchImages['results']
  searchTerm: string
  setSearchTerm: (term: string) => void
  handleSearch: () => void
  fetchNextPage: () => void
  hasNextPage?: boolean
  isFetchingNextPage: boolean
  loading: boolean
}
