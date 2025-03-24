import {MyPicturesProps} from '@/screens/app/tabs/my-pictures/data'
import {MyPictures as Layout} from '@/screens/app/tabs/my-pictures/layout'

export const MyPictures = (props: MyPicturesProps) => {
  const layoutProps = {
    ...props,
  }

  return <Layout {...layoutProps} />
}
