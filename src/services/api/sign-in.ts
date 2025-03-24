import {signInWithEmailAndPassword} from 'firebase/auth'

import {auth} from '@/configs/firebase'
import {SignIn} from '@/services/api/interfaces/sign-in'

export const signIn = async ({email, password}: {email: string; password: string}): Promise<SignIn> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}
