import {ScrollView, Image} from 'react-native'
import {ChevronRight} from 'lucide-react-native'

import {menuItems, ProfileLayoutProps} from '@/screens/app/tabs/profile/data'
import {Header, Wrapped, Button, Text} from '@/components'

export const Profile = ({theme, user, logout}: ProfileLayoutProps) => {
  return (
    <>
      <Header title="Perfil" />
      <Wrapped flexDirection="row" alignItems="center" px={4} py={3} gap={12}>
        <Image width={50} height={50} style={{borderRadius: 35, backgroundColor: theme.colors.primary}} />
        <Wrapped>
          <Text fontSize={18} fontWeight="bold">
            Olá, Usuário
          </Text>
          <Text>{user?.email || 'email@exemplo.com'}</Text>
        </Wrapped>
      </Wrapped>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Wrapped flex={1} px={4} pb={2}>
          {menuItems.map(({label, icon: Icon}, index) => (
            <Button key={index} onPress={label === 'Sair da conta' ? logout : () => {}}>
              <Wrapped
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                borderBottomWidth={index !== menuItems.length - 1 ? 1 : 0}
                borderBottomColor={theme.colors.border}
                py={12}
              >
                <Wrapped flexDirection="row" gap={12}>
                  <Icon size={20} color={theme.colors.text} />
                  <Text>{label}</Text>
                </Wrapped>
                <ChevronRight size={20} color={theme.colors.primary} />
              </Wrapped>
            </Button>
          ))}
        </Wrapped>
      </ScrollView>
    </>
  )
}
