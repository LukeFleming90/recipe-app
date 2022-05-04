import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from "axios";

export default function LoginForm({ setUser }) {

  let navigate = useNavigate();

const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

function pageRedirect() {
  axios.post("http://localhost:3000/testing")
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials)
    setUser(user)
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Flex
              minH={'100vh'}
              align={'center'}
              justify={'center'}
              bg={useColorModeValue('gray.50', 'gray.800')}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                  <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                  </Text>
                </Stack>
                <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}>
                <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" value={credentials.email} onChange={handleChange} required/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" value={credentials.password} onChange={handleChange} required/>
                </FormControl>
        <Stack spacing={10}>
        <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link href='/signup' color={'blue.400'}>Need An Account?</Link>
              </Stack>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            type="submit">
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Stack>
</Flex>
</form>






        // <div className={styles.LoginForm}>
        //   <form autoComplete="off" className={styles.form1} onSubmit={handleSubmit}>
        //     <input type="text" className={styles.un} name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
        //     <input type="password" className={styles.pass} name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
        //     <button className={styles.submit} type="submit">LOG IN</button>
        //   </form>
        // </div>
      );
}