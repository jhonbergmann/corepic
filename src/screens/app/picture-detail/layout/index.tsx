import {ScrollView, Image} from 'react-native'
import {Heart, ShoppingBag} from 'lucide-react-native'

import {Button, Conditional, Header, Text, Wrapped} from '@/components'
import {PictureDetailLayoutProps} from '@/screens/app/picture-detail/data'

export const PictureDetail = ({theme, detail, screenHeight, addItemToCart}: PictureDetailLayoutProps) => {
  return (
    <Wrapped flex={1}>
      <Header />
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Wrapped flex={1} py={2}>
          <Image source={{uri: detail?.urls.regular}} style={{width: '100%', height: screenHeight * 0.6}} resizeMode="cover" />
          <Wrapped padding={16} gap={12}>
            <Conditional render={Boolean(detail?.description)}>
              <Text textSize="medium" numberOfLines={3}>
                {detail?.description}
              </Text>
            </Conditional>
            <Wrapped flexDirection="row" alignItems="center" gap={8}>
              <Image source={{uri: detail?.user.profile_image.medium}} style={{width: 40, height: 40, borderRadius: 20}} />
              <Text fontWeight="bold">{detail?.user.name}</Text>
            </Wrapped>
            <Text>Publicado em: {new Date(detail?.created_at as string).toLocaleDateString('pt-BR')}</Text>
            <Conditional render={Boolean(detail?.tags?.[0]?.title)}>
              <Text>Tag: {detail?.tags?.[0]?.title}</Text>
            </Conditional>
            <Text>
              <Heart size={20} color={theme.colors.text} /> {detail?.likes} curtidas
            </Text>
            <Button variant="solid" onPress={() => addItemToCart({product: detail})}>
              <Wrapped flexDirection="row" gap={8} bg="transparent">
                <ShoppingBag size={20} color={theme.colors.background} />
                <Text color={theme.colors.background} fontWeight="bold">
                  Adicionar ao Carrinho R$ 20,00
                </Text>
              </Wrapped>
            </Button>
          </Wrapped>
        </Wrapped>
      </ScrollView>
    </Wrapped>
  )
}
