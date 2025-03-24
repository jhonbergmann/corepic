import {Animated} from 'react-native'

import {AppNavigatorTabsRoutesProps} from '@/routes/app.tabs.routes'
import {Theme} from '@/themes'

export interface HomeProps {}

export interface HomeLayoutProps extends HomeProps {
  theme: Theme
  navigation: AppNavigatorTabsRoutesProps
  scrollY: Animated.Value
  headerHeight: Animated.AnimatedInterpolation<string | number>
  headerOpacity: Animated.AnimatedInterpolation<string | number>
}

interface Category {
  id: number
  title: string
  image: string
}

export interface CategoryListLayoutProps {
  categories: Category[]
  navigation: AppNavigatorTabsRoutesProps
}

export const categories: Category[] = [
  {id: 1, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/futebol.jpg', title: 'Futebol'},
  {id: 2, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/crossfit.jpg', title: 'Crossfit'},
  {id: 3, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/ciclismo.jpg', title: 'Ciclismo'},
  {id: 4, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/beachtennis.jpg', title: 'Beach Tennis'},
  {id: 5, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/futsal.jpg', title: 'Futsal'},
  {id: 6, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/corrida.jpg', title: 'Corrida'},
  {id: 7, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/natacao.jpg', title: 'Natação'},
  {id: 8, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/volei.jpg', title: 'Vôlei'},
  {id: 9, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/futevolei.jpg', title: 'Futevôlei'},
  {id: 10, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/eventos.jpg', title: 'Eventos'},
  {id: 11, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/basquete.jpg', title: 'Basquete'},
  {id: 12, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/artesmarciais.jpg', title: 'Artes Marciais'},
  {id: 13, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/surf.jpg', title: 'Surf'},
  {id: 14, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/motociclismo.jpg', title: 'Motociclismo'},
  {id: 15, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/formaturas.jpg', title: 'Formaturas'},
  {id: 16, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/jiujitsu.jpg', title: 'Jiu-Jitsu'},
  {id: 17, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/grau.jpg', title: 'Grau Moto'},
  {id: 18, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/padel.jpg', title: 'Padel'},
  {id: 19, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/teatro.jpg', title: 'Teatro'},
  {id: 20, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/tenis.jpg', title: 'Tênis'},
  {id: 21, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/canoa.jpg', title: 'Canoa'},
  {id: 22, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/festas.jpg', title: 'Festas'},
  {id: 23, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/automotiva.jpg', title: 'Automotiva'},
  {id: 24, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/montainbike.jpg', title: 'Mountain Bike'},
  {id: 25, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/treinos.jpg', title: 'Treinos'},
  {id: 26, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/ginastica.jpg', title: 'Ginástica'},
  {id: 27, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/hipismo.jpg', title: 'Hipismo'},
  {id: 28, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/kitesurf.jpg', title: 'Kitesurf'},
  {id: 29, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/trilhas.jpg', title: 'Trilhas'},
  {id: 30, image: 'https://d2lfc09o2kjf56.cloudfront.net/img/categorias/2023/altinha.jpg', title: 'Altinha'},
]
