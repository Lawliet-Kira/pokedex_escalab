import React from 'react';
import { Card, CardBody, Stack } from '@chakra-ui/react';
import whoImage from "../../assets/who.png";

// stateless component
const RandomCardPoke = ({ handleOnClick }) => (
    <Card
        cursor={'pointer'}
        w="300px"
        h="350px"
        _hover={{
            boxShadow: "lg",
            backgroundColor: 'purple.200'
        }}
        backgroundImage={`url(${whoImage})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        onClick={handleOnClick}
    >
        <CardBody>   
            <Stack align={'center'} >
                {/* <Image src={pokemon.imgURL} /> */}
                {/* <Heading w="200px" bg="white" borderRadius={"25px"} as='h3' size='lg'> Random </Heading> */}
            </Stack>
        </CardBody>
    </Card>
);
 
export default React.memo(RandomCardPoke);