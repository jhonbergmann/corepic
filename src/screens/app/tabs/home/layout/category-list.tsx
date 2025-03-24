import React from 'react'
import {TouchableOpacity, View, Image} from 'react-native'

import {CategoryListLayoutProps} from '@/screens/app/tabs/home/data'
import {Wrapped, Text, Conditional} from '@/components/'

export const CategoryList = ({categories, navigation}: CategoryListLayoutProps) => {
  const RenderMask = () => <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 10}} />

  return (
    <Wrapped flexDirection="column" width="100%" px={2} pt={4}>
      {categories.map((item, index) => (
        <Conditional key={item.id} render={index % 2 === 0}>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <TouchableOpacity style={{flex: 1, marginRight: 8}} onPress={() => navigation.navigate('search', {category: item.title})}>
              <Wrapped height={150} borderRadius={10} overflow="hidden" center>
                <Image source={{uri: item.image}} style={{width: '100%', height: '100%', position: 'absolute'}} />
                <RenderMask />
                <Text color="white" fontWeight="bold" textSize="large" style={{position: 'absolute', bottom: 10, left: 10}}>
                  {item.title}
                </Text>
              </Wrapped>
            </TouchableOpacity>
            {categories[index + 1] && (
              <TouchableOpacity style={{flex: 1, marginLeft: 8}} onPress={() => navigation.navigate('search', {category: categories[index + 1].title})}>
                <Wrapped height={150} borderRadius={10} overflow="hidden" center>
                  <Image source={{uri: categories[index + 1].image}} style={{width: '100%', height: '100%', position: 'absolute'}} />
                  <RenderMask />
                  <Text color="white" fontWeight="bold" textSize="large" style={{position: 'absolute', bottom: 10, left: 10}}>
                    {categories[index + 1].title}
                  </Text>
                </Wrapped>
              </TouchableOpacity>
            )}
          </View>
        </Conditional>
      ))}
    </Wrapped>
  )
}
