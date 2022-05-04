import { signUp } from '../../utilities/users-service';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

// handleChange = (evt) => {
//   this.setState({
//     [evt.target.name]: evt.target.value,
//     error: ''
//   });
// };

// handleSubmit = async (evt) => {
//   evt.preventDefault();
//   try {
//     const formData = {...this.state};
//     delete formData.confirm;
//     delete formData.error;
//     // The promise returned by the signUp service method
//     // will resolve to the user object included in the
//     // payload of the JSON Web Token (JWT)
//     const user = await signUp(formData);
//     // Baby step
//     this.props.setUser(user);
//   } catch {
//     // An error happened on the server
//     this.setState({ error: 'Sign Up Failed - Try Again' });
//   }
// };

// <form autoComplete="off" className={styles.form1} onSubmit={this.handleSubmit}>
//           <input type="text" className={styles.un} name="name" value={this.state.name} onChange={this.handleChange} placeholder="Full Name" required />
//           <input type="email" className={styles.un} name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required />
//           <input type="password" className={styles.un} name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
//           <input type="password" className={styles.un} name="confirm" value={this.state.confirm} onChange={this.handleChange} placeholder="Confirm Password" required />
//           <button className={styles.submit} type="submit" disabled={disable}>SIGN UP</button>
//         </form>
//         <p style={{display: this.state.error ? "block" : "none"}} className="error-message">&nbsp;{this.state.error}</p>



export default function SignUpForm({ setUser }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const handleChange = (evt) => {
    setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value })
  };

  const handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...userInfo};
    delete formData.confirm;
    delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await signUp(formData);
    // Baby step
    setUser(user);
  } catch (error) {
    // An error happened on the server
    console.log(error)
    setUserInfo({ error: 'Sign Up Failed - Try Again' });
  }
};
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <form onSubmit={handleSubmit}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="Full Name" required/>
                </FormControl>
              </Box>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Email" required/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name="password" value={userInfo.password} onChange={handleChange} placeholder="Password" required/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="passwordOne" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPasswordOne ? 'text' : 'password'} name="confirm" value={userInfo.confirm} onChange={handleChange} placeholder="Password" required/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPasswordOne((showPasswordOne) => !showPasswordOne)
                    }>
                    {showPasswordOne ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit">
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <p style={{display: userInfo.error ? "?" : "none"}}>&nbsp;{userInfo.error}</p>
      </form>
    </Flex>
  );
}