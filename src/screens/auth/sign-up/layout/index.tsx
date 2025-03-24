import {ScrollView, Image} from 'react-native'
import {Controller} from 'react-hook-form'

import {SignUpLayoutProps} from '@/screens/auth/sign-up/data'
import {Wrapped, Button, Text, Input} from '@/components'
import Google from '@/assets/google.png'

export const SignUp = ({loading, navigation, control, handleSubmit, submit, errors}: SignUpLayoutProps) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      <Wrapped flex={1} justifyContent="space-around" alignItems="center" px={4}>
        <Wrapped width="100%">
          <Text textSize="xxlarge" fontWeight="bold">
            Cadastrar
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
                returnKeyType="next"
                secureTextEntry
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({field}) => (
              <Input
                title="Confirmar senha"
                value={field.value}
                onChangeText={field.onChange}
                placeholder="confirme sua senha"
                error={errors.confirmPassword?.message}
                returnKeyType="done"
                secureTextEntry
                onSubmitEditing={handleSubmit(submit)}
              />
            )}
          />
          <Button mt={2} title="Cadastrar" onPress={handleSubmit(submit)} loading={loading} variant="solid" />
          <Wrapped center gap={4}>
            <Wrapped center flexDirection="row" width="100%">
              <Wrapped height={2} bg="border" width="25%" />
              <Text px={2}>Ou cadastre com Google</Text>
              <Wrapped height={2} bg="border" width="25%" />
            </Wrapped>
            <Button mt={2} variant="outline" onPress={() => {}}>
              <Image source={Google} style={{width: 20, height: 20}} />
            </Button>
          </Wrapped>
        </Wrapped>
        <Wrapped center gap={20} width="100%">
          <Text onPress={() => navigation.navigate('signIn')}>
            Você já possui acesso? <Text fontWeight="bold">Log in</Text>
          </Text>
        </Wrapped>
      </Wrapped>
    </ScrollView>
  )
}
