import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

import { MdCheckCircle } from "react-icons/md";

import React from 'react';

export default function ProductSimple({ setNewDrink, setIsTrue, isTrue, image, type, glass, name, category, instructions, ingredient1, measurement1, ingredient2, measurement2, ingredient3, measurement3, ingredient4, measurement4, ingredient5, measurement5, ingredient6, measurement6, ingredient7, measurement7, ingredient8, measurement8, ingredient9, measurement9, ingredient10, measurement10, ingredient11, measurement11, ingredient12, measurement12, ingredient13, measurement13, ingredient14, measurement14, ingredient15, measurement15}) {
 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()
  const setDrink = () => {
    setNewDrink({
      name: name,
      instructions: instructions,
      ingredient1: ingredient1,
      ingredient2: ingredient2,
      ingredient3: ingredient3,
      ingredient4: ingredient4,
      ingredient5: ingredient5,
      ingredient6: ingredient6,
      ingredient7: ingredient7,
      ingredient8: ingredient8,
      ingredient9: ingredient9,
      ingredient10: ingredient10,
      ingredient11: ingredient11,
      ingredient12: ingredient12,
      ingredient13: ingredient13,
      ingredient14: ingredient14,
      ingredient15: ingredient15,
      measurement1: measurement1,
      measurement2: measurement2,
      measurement3: measurement3,
      measurement4: measurement4,
      measurement5: measurement5,
      measurement6: measurement6,
      measurement7: measurement7,
      measurement8: measurement8,
      measurement9: measurement9,
      measurement10: measurement10,
      measurement11: measurement11,
      measurement12: measurement12,
      measurement13: measurement13,
      measurement14: measurement14,
      measurement15: measurement15,
    })
  }

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {type}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Wrap spacing='30px'>
            <WrapItem>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                {glass}
              </Badge>
            </WrapItem>
            <WrapItem>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                {type}
              </Badge>
            </WrapItem>
            <WrapItem>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                {category}
              </Badge>
            </WrapItem>
          </Wrap>
        </Stack>
        <>
          <Button mt={4} onClick={() => {onOpen(); setIsTrue(!isTrue); setDrink();}}>
            Drink Details
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
              <ModalBody>
                <Text mb={2}>How to Make:</Text>
                {instructions}
                <Divider mt={4} mb={4}/>
                <Text mb={4}>Ingredients</Text>
                <List spacing={3}>
                  <ListItem style={{display: ingredient1 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient1}: ${measurement1}`}
                  </ListItem>
                  <ListItem style={{display: ingredient2 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient2}: ${measurement2}`}
                  </ListItem>
                  <ListItem style={{display: ingredient3 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient3}: ${measurement3}`}
                  </ListItem>
                  <ListItem style={{display: ingredient4 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient4}: ${measurement4}`}
                  </ListItem>
                  <ListItem style={{display: ingredient5 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient5}: ${measurement5}`}
                  </ListItem>
                  <ListItem style={{display: ingredient6 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient6}: ${measurement6}`}
                  </ListItem>
                  <ListItem style={{display: ingredient7 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient7}: ${measurement7}`}
                  </ListItem>
                  <ListItem style={{display: ingredient8 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient8}: ${measurement8}`}
                  </ListItem>
                  <ListItem style={{display: ingredient9 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient9}: ${measurement9}`}
                  </ListItem>
                  <ListItem style={{display: ingredient10 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient10}: ${measurement10}`}
                  </ListItem>
                  <ListItem style={{display: ingredient11 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient11}: ${measurement11}`}
                  </ListItem>
                  <ListItem style={{display: ingredient12 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient12}: ${measurement12}`}
                  </ListItem>
                  <ListItem style={{display: ingredient13 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient13}: ${measurement13}`}
                  </ListItem>
                  <ListItem style={{display: ingredient14 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient14}: ${measurement14}`}
                  </ListItem>
                  <ListItem style={{display: ingredient15 ? "?" : "none"}}>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {`${ingredient15}: ${measurement15}`}
                  </ListItem>
                </List>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </Box>
    </Center>
  );
}