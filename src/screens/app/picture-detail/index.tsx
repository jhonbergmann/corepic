import {useNavigation, useRoute} from '@react-navigation/native'
import {useQuery} from '@tanstack/react-query'
import {Dimensions} from 'react-native'

import {PictureDetailProps} from '@/screens/app/picture-detail/data'
import {PictureDetail as Layout} from '@/screens/app/picture-detail/layout'
import {FetchImageDetails as ImageDetails} from '@/services/api/interfaces/images'
import {CartItem} from '@/contexts/interfaces/cart'
import {AppRoutes} from '@/routes/app.routes'
import {fetchImageDetails} from '@/services/api/images'
import {useTheme} from '@/contexts/theme'
import {useCart} from '@/contexts/cart'
import {useToast} from '@/contexts/toast'

const {height: screenHeight} = Dimensions.get('window')

export const PictureDetail = (props: PictureDetailProps) => {
  const {theme} = useTheme()
  const {dispatch} = useCart()
  const {addToast} = useToast()
  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params as AppRoutes['pictureDetail']

  const {data} = useQuery({queryKey: ['imageDetails', params.id], queryFn: () => fetchImageDetails(params.id)})

  const addItemToCart = ({product}: {product: ImageDetails | undefined}) => {
    try {
      const newItem = {
        id: product?.id,
        price: 20,
        description: product?.description,
        quantity: 1,
        imageUrl: product?.urls.regular,
      }
      addToast({message: 'Item adicionado ao carrinho.', type: 'success'})
      dispatch({type: 'ADD_ITEM', payload: newItem as CartItem})
    } catch {
      addToast({message: 'Ocorreu um erro ao adicionar o item ao carrinho, tente novamente.', type: 'error'})
    } finally {
      navigation.goBack()
    }
  }

  const layoutProps = {
    ...props,
    theme,
    detail: data,
    screenHeight,
    addItemToCart,
  }

  return <Layout {...layoutProps} />
}
