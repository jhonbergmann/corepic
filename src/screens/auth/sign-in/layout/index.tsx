import {ScrollView, Image} from 'react-native'
import {Controller} from 'react-hook-form'

import {SignInLayoutProps} from '@/screens/auth/sign-in/data'
import {Wrapped, Button, Text, Input} from '@/components'
import Google from '@/assets/google.png'

export const SignIn = ({loading, navigation, control, handleSubmit, submit, errors}: SignInLayoutProps) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      <Wrapped flex={1} justifyContent="space-around" alignItems="center" px={4}>
        <Wrapped width="100%">
          <Text textSize="xxlarge" fontWeight="bold">
            Entrar
          </Text>
        </Wrapped>
        <Wrapped gap={20} width="100%">
          <Controller
            name="email"
            control={control}
            render={({field}) => (
              <Input
                title="Email"
                value={field.value}
                onChangeText={field.onChange}
                placeholder="exemplo@gmail.com"
                keyboardType="email-address"
                error={errors.email?.message}
                returnKeyType="next"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({field}) => (
              <Input
                title="Senha"
                value={field.value}
                onChangeText={field.onChange}
                placeholder="deve ter 6 dígitos"
                error={errors.password?.message}
                returnKeyType="done"
                onSubmitEditing={handleSubmit(submit)}
                secureTextEntry
              />
            )}
          />
          <Text textAlign="right" textSize="small">
            Esqueceu sua senha?
          </Text>
          <Button mt={2} title="Entrar" onPress={handleSubmit(submit)} loading={loading} variant="solid" />
          <Wrapped center gap={4}>
            <Wrapped center flexDirection="row" width="100%">
              <Wrapped height={2} bg="border" width="25%" />
              <Text px={2}>Ou entre com Google</Text>
              <Wrapped height={2} bg="border" width="25%" />
            </Wrapped>
            <Button mt={2} variant="outline" onPress={() => {}}>
              <Image source={Google} style={{width: 20, height: 20}} />
            </Button>
          </Wrapped>
        </Wrapped>
        <Wrapped center gap={20} width="100%">
          <Text onPress={() => navigation.navigate('signUp')}>
            Ainda não tem acesso? <Text fontWeight="bold">Sign up</Text>
          </Text>
        </Wrapped>
      </Wrapped>
    </ScrollView>
  )
}
