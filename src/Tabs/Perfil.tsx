import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil(){
  return(
    <ScrollView flex={1} bgColor="black">
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={{ uri: "https://github.com/renanfrontend" }} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>Renan Augusto</Titulo>
        <Text>20/01/1984</Text>
        <Text>São Paulo</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
        <Text>Rinite Alérgica</Text>
        <Text>TDAH</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  )
}
