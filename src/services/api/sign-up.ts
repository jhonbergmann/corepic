import {createUserWithEmailAndPassword} from 'firebase/auth'

import {auth} from '@/configs/firebase'
import {SignUp} from '@/services/api/interfaces/sign-up'

export const signUp = async ({email, password}: {email: string; password: string}): Promise<SignUp> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  return userCredential.user
}
