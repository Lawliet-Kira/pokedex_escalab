import React from 'react';
import { Flex, Grid, GridItem, Icon, Text, Spacer } from '@chakra-ui/react';
import { GiPointySword, GiCrackedShield, GiBouncingSword } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShieldFill, BsSpeedometer } from "react-icons/bs";

import styled from '@emotion/styled';

// Styled Component
const GridItemStyled = styled(GridItem)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 10,
    marginLeft: 20
});

const PokeStats = (props) => ( 
    <Grid 
        templateRows={['repeat(6, 1fr)' ,'repeat(3, 1fr)']}
        templateColumns={[ 'repeat(1, 1fr)','repeat(2, 1fr)']}
        bg={'purple.100'} 
        justifyItems='flex-start'
        alignItems='center'
        borderRadius={'2px'} 
        boxShadow={"base"}
        fontSize="18px"
        h="180px"
        p="10px"
    >
        <GridItemStyled>
            <Icon as={AiFillHeart} />
            <Text as="b"> Hp: </Text>
            <Text> { props.stats[0].base_stat }</Text>
        </GridItemStyled>
        <GridItemStyled>
            <Icon as={GiPointySword} />
            <Text as="b"> Attack: </Text>
            <Text>{ props.stats[1].base_stat }</Text>
        </GridItemStyled>
        <GridItemStyled>
            <Icon as={BsFillShieldFill} />
            <Text as="b"> Defense: </Text>
            <Text>{ props.stats[2].base_stat }</Text>
        </GridItemStyled>
        <GridItemStyled>
            <Icon as={GiBouncingSword} />
            <Text as="b"> Special-attack: </Text>
            <Text>{ props.stats[3].base_stat }</Text>
        </GridItemStyled>
        <GridItemStyled>
            <Icon as={GiCrackedShield} />
            <Text as="b"> Special-defense: </Text>
            <Text>{ props.stats[4].base_stat }</Text>
        </GridItemStyled>
        <GridItemStyled>
        <Icon as={BsSpeedometer} />
            <Text as="b"> Speed: </Text>
            <Text>{ props.stats[5].base_stat }</Text>
        </GridItemStyled>
    </Grid>
);
 
export default PokeStats;