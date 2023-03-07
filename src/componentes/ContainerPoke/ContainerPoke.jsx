import React, { useEffect, useState, useCallback } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { pokeData } from '../../data/constants';
import { fetchPokemon } from '../../apis/pokemon';
import ModalPoke from '../ModalPoke/ModalPoke';
import CardPoke from '../CardPoke/CardPoke';
import RandomCardPoke from '../RandomCardPoke/RandomCardPoke';

// statefull component
const ContainerPoke = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const [currPokemon, setCurrPokemon] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Carga los primeros pokemones
    useEffect(() => {
        setPokemons(pokeData);
    }, []);

    /* La función se mantiene desde el primer renderizado, ya que no depende de valores externos */
    const handleOnClick = useCallback(async (id) => {
        onOpen();
        const pokeInfo = await fetchPokemon('pokemon', id);
        setTimeout(() => {
            setCurrPokemon(pokeInfo);
        }, 1000);
    }, []);

    /* La función se mantiene desde el primer renderizado, ya que no depende de valores externos */
    const handleOnClickRandom = useCallback(async () => {
        onOpen();
        const randomInt = Math.floor(Math.random() * 1001);
        const pokeInfo = await fetchPokemon('pokemon', randomInt);
        setTimeout(() => {
            setCurrPokemon(pokeInfo);
        }, 1000);
    },[]);

    /* La función se mantiene desde el primer renderizado, ya que no depende de valores externos */
    const handleOnClose = useCallback(() => {
        onClose();
        setCurrPokemon(null);
    }, []);

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