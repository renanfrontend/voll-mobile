import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";

export default function Explorar(){
  return(
    <ScrollView flex={1} bgColor="black">
      <VStack flex={1} color="gray.300" alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto 
            placeholder="Digite a especialidade"
          />
          <EntradaTexto
            placeholder="Digite sua localização"
          />
          <Botao color="gray.300" mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="gray.300" alignSelf="center">Resultado da Busca</Titulo>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="black" key={index}>
            <CardConsulta 
              especialidade="Cardiologia"
              foto="https://github.com/renanaugust.png"
              nome="Dr. Augusto"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}