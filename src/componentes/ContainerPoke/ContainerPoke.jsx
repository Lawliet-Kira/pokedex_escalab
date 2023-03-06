import React, { useState } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { pokeData } from '../../data/constants';
import { fetchPokemon } from '../../apis/pokemon';
import ModalPoke from '../ModalPoke/ModalPoke';
import CardPoke from '../CardPoke/CardPoke';
import RandomCardPoke from '../RandomCardPoke/RandomCardPoke';

const ContainerPoke = (props) => {

    const [pokemons, setPokemons] = useState(pokeData);
    const [currPokemon, setCurrPokemon] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOnClick = async (id) => {
        onOpen();
        const pokeInfo = await fetchPokemon('pokemon', id);
        setTimeout(() => {
            setCurrPokemon(pokeInfo);
        }, 1000);
    }

    const handleOnClickRandom = async () => {
        onOpen();
        const randomInt = Math.floor(Math.random() * 1001);
        const pokeInfo = await fetchPokemon('pokemon', randomInt);
        setTimeout(() => {
            setCurrPokemon(pokeInfo);
        }, 1000);
    }

    const handleOnClose = () => {
        onClose();
        setCurrPokemon(null);
    }

    return (
        <Flex
            flexDir="row"
            flexWrap="wrap"
            justify={'center'}
            gap="20px"
        >  
            {
                pokemons.length && pokemons.map( pokemon => <CardPoke handleOnClick={() => handleOnClick(pokemon.id)} key={pokemon.name} pokemon={pokemon} />)
            }
            <RandomCardPoke handleOnClick={handleOnClickRandom} />
            <ModalPoke
                pokemon={currPokemon}
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={handleOnClose}
            />
        </Flex>
    );
}
 
export default ContainerPoke;