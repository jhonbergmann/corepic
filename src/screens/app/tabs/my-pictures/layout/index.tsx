import {ScrollView} from 'react-native'

import {Header, Wrapped} from '@/components'
import {MyPicturesLayoutProps} from '@/screens/app/tabs/my-pictures/data'
import {EmptyState} from '@/screens/app/tabs/my-pictures/layout/empty'

export const MyPictures = ({}: MyPicturesLayoutProps) => {
  return (
    <>
      <Header title="Suas fotos" />
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Wrapped flex={1}>
          <EmptyState />
        </Wrapped>
      </ScrollView>
    </>
  )
}
