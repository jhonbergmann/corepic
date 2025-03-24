import {FlatList, Image, TouchableOpacity} from 'react-native'

import {SearchLayoutProps} from '@/screens/app/tabs/search/data'
import {EmptyState} from '@/screens/app/tabs/search/layout/empty'
import {Wrapped, Input, Spinner, Header, Text} from '@/components'

export const Search = ({navigation, inputRef, searchTerm, setSearchTerm, handleSearch, images, fetchNextPage, isFetchingNextPage, hasNextPage, loading}: SearchLayoutProps) => {
  return (
    <>
      <Header />
      <Wrapped flex={1} px={2} pt={2}>
        <Input ref={inputRef} placeholder="Pesquise suas fotos..." value={searchTerm} onChangeText={setSearchTerm} onSubmitEditing={handleSearch} />
        <Wrapped p={2} />
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          numColumns={2}
          onEndReached={() => hasNextPage && fetchNextPage()}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Wrapped key={item.id} flex={1} m={2} borderRadius={8} overflow="hidden" position="relative">
              <TouchableOpacity onPress={() => navigation.navigate('pictureDetail', {id: item.id})} style={{position: 'relative'}}>
                <Image source={{uri: item.urls.small}} style={{width: '100%', height: 150, borderRadius: 8}} />
                <Wrapped
                  flexDirection="row"
                  justifyContent="space-between"
                  borderRadius={8}
                  p={10}
                  center
                  position="absolute"
                  left={10}
                  right={10}
                  bottom={10}
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}
                >
                  <Wrapped flex={1} flexDirection="row" justifyContent="space-around" center bg="transparent" gap={12}>
                    <Image source={{uri: item.user.profile_image.small}} style={{width: 30, height: 30, borderRadius: 15}} />
                    <Text fontWeight="bold" style={{color: 'white', flex: 1, overflow: 'hidden'}} numberOfLines={1}>
                      {item.user.name}
                    </Text>
                  </Wrapped>
                </Wrapped>
              </TouchableOpacity>
            </Wrapped>
          )}
          ListFooterComponent={isFetchingNextPage ? <Spinner size="small" /> : null}
          ListEmptyComponent={!loading ? <EmptyState /> : null}
        />
      </Wrapped>
    </>
  )
}
