import { Text, Divider, HStack, Image, Center } from '@chakra-ui/react'

export default function Logo(props) {

  return(
    <HStack spacing={4}>
      <Image boxSize='150px' objectFit='cover' src='https://inspire.designs.ai/wp-content/uploads/Logos/music/music-logo-maker-good-music-600x462.jpg' alt='Company Logo' />
      <Center height='75px'>
        <Divider orientation='vertical' />
      </Center>
      <Text fontSize='2xl'>Getting Out Our Developments</Text>
    </HStack>
  )
}