import {FetchImageDetails} from '@/services/api/interfaces/images'
import {Theme} from '@/themes'

export interface PictureDetailProps {}

export interface PictureDetailLayoutProps extends PictureDetailProps {
  theme: Theme
  detail: FetchImageDetails | undefined
  screenHeight: number
  addItemToCart: ({product}: {product: FetchImageDetails | undefined}) => void
}
