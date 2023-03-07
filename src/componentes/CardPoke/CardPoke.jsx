import React from 'react';
import { Card, CardBody, Image, Stack, Heading } from '@chakra-ui/react';

// stateless component
const CardPoke = ({ pokemon, handleOnClick }) => (
    <Card
        cursor={'pointer'}
        w="300px"
        h="350px"
        _hover={{
            boxShadow: "lg",
            backgroundColor: 'purple.200'
        }}
        bg="purple.100"
        onClick={handleOnClick}
    >
        <CardBody>   
            <Stack align={'center'}>
                <Image src={pokemon.imgURL} />
                <Heading as='h3' size='lg'>{pokemon.name}</Heading>
            </Stack>
        </CardBody>
    </Card>
);
 
export default React.memo(CardPoke);