import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import ContainerPoke from './componentes/ContainerPoke/ContainerPoke';
import pokeLogo from './assets/pokedex.png';

function App() {

  return (
    <Flex w="100vw" h="100vh" flexDir="column" align={'center'} rowGap="20px">
      <Image marginTop={10} src={pokeLogo} w={['300px', '300px', '400px']} />
      <Text> Click on a pokemon! 👆 to know more about it </Text>
      <ContainerPoke />
    </Flex>
  );

}

export default App;
