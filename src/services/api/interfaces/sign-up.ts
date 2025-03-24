import {UserCredential} from 'firebase/auth'

type User = UserCredential['user']

export interface SignUp extends User {}
