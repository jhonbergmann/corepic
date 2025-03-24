import {Image, ScrollView} from 'react-native'
import {Trash} from 'lucide-react-native'

import {Button, Conditional, Header, Text, Wrapped} from '@/components'
import {CartLayoutProps} from '@/screens/app/tabs/cart/data'
import {EmptyState} from '@/screens/app/tabs/cart/layout/empty'

export const Cart = ({cart, removeItemToCart, theme, totalAmount}: CartLayoutProps) => {
  return (
    <>
      <Header title="Carrinho" />
      <Conditional render={Boolean(cart?.items?.length)}>
        <>
          <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            <Wrapped flex={1} px={4} py={4}>
              <Wrapped pb={2}>
                <Text textSize="large" fontWeight="bold" color={theme.colors.placeholder}>
                  Fotos
                </Text>
              </Wrapped>
              {cart.items.map((item) => (
                <Wrapped key={item.id} flexDirection="row" justifyContent="space-between" alignItems="center" py={2} gap={12}>
                  <Wrapped flex={1} flexDirection="row" gap={12} center>
                    <Image source={{uri: item.imageUrl}} style={{width: 80, height: 80, borderRadius: theme.borderRadius.medium}} />
                    <Wrapped flex={1}>
                      <Text fontWeight="bold" textSize="large">
                        R$ {item.price},00
                      </Text>
                      <Conditional render={Boolean(item.description)}>
                        <Text textSize="medium" color={theme.colors.placeholder} numberOfLines={1}>
                          {item.description}
                        </Text>
                      </Conditional>
                      <Text textSize="medium" color={theme.colors.placeholder}>
                        - ID {item.id}
                      </Text>
                    </Wrapped>
                  </Wrapped>
                  <Trash onPress={() => removeItemToCart(item.id)} color={theme.colors.error} size={20} />
                </Wrapped>
              ))}
            </Wrapped>
          </ScrollView>
          <Wrapped p={2} gap={4}>
            <Wrapped justifyContent="space-between" flexDirection="row">
              <Text color={theme.colors.placeholder}>Itens ({cart.items.length})</Text>
              <Text color={theme.colors.placeholder}>R$ {totalAmount},00</Text>
            </Wrapped>
            <Wrapped justifyContent="space-between" flexDirection="row">
              <Text fontWeight="bold" textSize="large">
                Total
              </Text>
              <Text fontWeight="bold" textSize="large">
                R$ {totalAmount},00
              </Text>
            </Wrapped>
            <Button variant="solid" title="Finalizar Compra" onPress={() => {}} />
          </Wrapped>
        </>
      </Conditional>
      <Conditional render={!cart?.items?.length}>
        <EmptyState />
      </Conditional>
    </>
  )
}
