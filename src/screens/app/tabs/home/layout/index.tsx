import React from 'react'
import {ScrollView, Image, Dimensions, Animated} from 'react-native'

import {HomeLayoutProps, categories} from '@/screens/app/tabs/home/data'
import {CategoryList} from '@/screens/app/tabs/home/layout/category-list'
import {Button, Header, Input, Text, Wrapped} from '@/components'

import Hero from '@/assets/hero.png'
import Logo from '@/assets/logo.png'

const {height: screenHeight} = Dimensions.get('window')

export const Home = ({theme, navigation, scrollY, headerHeight, headerOpacity}: HomeLayoutProps) => {
  return (
    <>
      <Animated.View style={[{height: headerHeight, opacity: headerOpacity}]}>
        <Header showBack={false} />
      </Animated.View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {useNativeDriver: false})}
        scrollEventThrottle={16}
      >
        <Wrapped height={screenHeight * 0.6} center>
          <Image source={Hero} style={{width: '100%', height: '100%', position: 'absolute'}} />
          <Wrapped bg="transparent" center height="100%" width="100%" px={2} justifyContent="space-around">
            <Image source={Logo} style={{height: 30, width: 100}} resizeMode="contain" />
            <Text px={4} textSize="xlarge" color="white" fontWeight="bold" textAlign="center" letterSpacing={1} lineHeight="35px">
              Encontre e compre as melhores fotos do mundo de forma simples e segura.
            </Text>
            <Wrapped width="100%" bg="transparent">
              <Button onPress={() => navigation.navigate('search', {category: '', focused: true})}>
                <Wrapped width="100%" bg="transparent">
                  <Input editable={false} placeholder="Pesquise suas fotos..." />
                </Wrapped>
              </Button>
            </Wrapped>
          </Wrapped>
        </Wrapped>
        <Wrapped flex={1} px={2} py={4}>
          <Wrapped justifyContent="space-between" center flexDirection="row">
            <Text fontWeight="bold" textSize="xlarge">
              Categorias
            </Text>
            <Text onPress={() => navigation.navigate('search', {category: ''})} fontWeight="bold" color={theme.colors.primary} textSize="medium">
              Ver tudo
            </Text>
          </Wrapped>
          <CategoryList categories={categories} navigation={navigation} />
          <Wrapped p={4}>
            <Text fontWeight="bold" textSize="xlarge" lineHeight="35px">
              "Você também pode pesquisar por outras categorias como
              <Text color={theme.colors.primary} textSize="xlarge">{` Paisagens`}</Text>,<Text color={theme.colors.primary} textSize="xlarge">{` Arquitetura `}</Text>ou
              <Text color={theme.colors.primary} textSize="xlarge">{` Retratos Artísticos `}</Text>e muito mais!''
            </Text>
          </Wrapped>
          <Wrapped bg="primary" p={4}>
            <Text fontWeight="bold" textSize="xlarge" lineHeight="35px" color={theme.colors.background}>
              Na CorePic, você faz parte de uma comunidade que apoia seu talento. Juntos, crescemos e fortalecemos o mercado de fotografia digital. Bora Crescer juntos!
            </Text>
            <Button variant="outline" mt={4}>
              <Text color={theme.colors.background} textSize="large" fontWeight="bold">
                Participe da Comunidade
              </Text>
            </Button>
          </Wrapped>
        </Wrapped>
      </ScrollView>
    </>
  )
}
