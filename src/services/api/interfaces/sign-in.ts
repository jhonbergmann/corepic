import {UserCredential} from 'firebase/auth'

type User = UserCredential['user']

export interface SignIn extends User {}
