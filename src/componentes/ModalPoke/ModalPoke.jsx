import React from 'react';
import { CircularProgress, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image, Spinner, Flex, Text, Heading, Stack, Divider, ModalFooter } from '@chakra-ui/react';
import PokeStats from './PokeStats/PokeStats';

const ModalPoke = ({ isOpen, onClose, pokemon }) => (
    <Modal size={['xs', 'sm', 'md', 'lg', 'xl']} isOpen={isOpen} onClose={onClose} isCentered trapFocus={false}>
        <ModalOverlay />
        <ModalContent h={["520px", "420px"]}>
            <ModalCloseButton />
            <ModalHeader> </ModalHeader>
            <ModalBody>
                { 
                    pokemon ?
                    <Flex flexDir={'column'} rowGap="4">
                        <Flex flexDir={['column', 'row']} align="center" columnGap="3" >
                            <Image boxSize='150px' objectFit='cover' bg="purple.100" borderRadius={'full'} boxShadow={'md'}  src={pokemon?.sprites?.front_default} />
                            <Stack direction='row'>
                                <Divider orientation='vertical' h={["100px","150px"]}/>
                                <Stack direction='column'>
                                <Heading as="h3" size={'lg'}>{ pokemon?.name }</Heading>
                                    <Flex flexDir={'row'} columnGap={1}>
                                        <Text as="b"> heigth:  </Text>
                                        <Text>{ pokemon?.height } [dm] </Text>
                                    </Flex>
                                    <Flex flexDir={'row'} columnGap={1}>
                                        <Text as="b"> weight:  </Text>
                                        <Text>{ pokemon?.weight } [hg] </Text>
                                    </Flex>
                                </Stack>
                            </Stack>
                        </Flex>
                        <PokeStats stats={pokemon?.stats} />
                    </Flex>
                    :
                    <Flex w="100%" h="100%" justify={'center'} align="center">
                        <CircularProgress color="purple.200" isIndeterminate  value={59} size='100px' thickness='4px' />
                    </Flex>
                }
            </ModalBody>
            <ModalFooter />
        </ModalContent>
    </Modal>
);
 
export default ModalPoke;