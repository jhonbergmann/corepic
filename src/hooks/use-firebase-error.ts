const firebaseErrorMessages: {[key: string]: string} = {
  'auth/invalid-email': 'O e-mail informado é inválido.',
  'auth/user-not-found': 'Usuário não encontrado.',
  'auth/invalid-credential': 'Credencial inválida.',
  'auth/email-already-in-use': 'Este e-mail já está em uso.',
  'auth/too-many-requests': 'Muitas tentativas de login. Tente novamente mais tarde.',
  'auth/operation-not-allowed': 'A operação não é permitida.',
  'auth/network-request-failed': 'Erro de rede. Tente novamente.',
  'auth/expired-action-code': 'Código de ação expirado.',
  'auth/invalid-action-code': 'Código de ação inválido.',
  'auth/user-disabled': 'Usuário desabilitado.',
}

export const useFirebaseError = () => {
  const handleError = (errorCode: string) => {
    const errorMessage = firebaseErrorMessages[errorCode] || 'Ocorreu um erro inesperado. Tente novamente.'
    return errorMessage
  }

  return {handleError}
}
