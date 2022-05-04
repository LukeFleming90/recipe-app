import { signUp } from '../../utilities/users-service';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormHelperText,
  FormErrorMessage,
  Checkbox
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { GiKnifeFork } from "react-icons/gi";

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
  const [isError, setIsError] = useState(false);
  const pwHelper = useRef();
  const coHelper = useRef();

  const checkData = () => {
    setIsError(pwHelper.current.value !== coHelper.current.value)
  }
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const handleChange = (evt) => {
    setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value })
    checkData();
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

    <form autoComplete="off" onSubmit={handleSubmit}>
            <Flex
              minH={'100vh'}
              align={'center'}
              justify={'center'}
              bg={useColorModeValue('gray.50', 'gray.800')}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Heading fontSize={'4xl'}>Sign Up &amp; Join Today!</Heading>
                <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}>
                  <Stack align={'center'}>
                  <Box display="flex" align="baseline" p='2' mb={5}>
                        <Box mt={1} mr={1}><GiKnifeFork/></Box>
                        <Heading size='md'><Link to="/">Random Drink &amp; Meal App</Link></Heading>
                  </Box>
                </Stack>
                <Stack spacing={4}>

                <FormControl id="firstName" isRequired>
                   <FormLabel>Full Name</FormLabel>
                   <Input type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="Full Name" required/>
                 </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Email" required/>
                </FormControl>

              <FormControl isRequired isInvalid={isError}>
               <FormLabel>Password</FormLabel>
               <InputGroup >
                 <Input type={showPassword ? 'text' : 'password'} id="password" name="password" value={userInfo.password} ref={pwHelper} onChange={handleChange} placeholder="Password" required/>
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

              <FormLabel>Password</FormLabel>
              <InputGroup >
                <Input type={showPasswordOne ? 'text' : 'password'} name="confirm" value={userInfo.confirm} ref={coHelper} onChange={handleChange} id="passwordOne" placeholder="Password" required/>
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
              {!isError ? (
              <FormHelperText>
              Please Make Sure Your Passwords Match
              </FormHelperText>
              ) : (
              <FormErrorMessage>Passwords Do Not Match</FormErrorMessage>
              )}
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
</Flex>
</form>




    // <form onSubmit={handleSubmit}>
    // <Flex
    //   minH={'100vh'}
    //   align={'center'}
    //   justify={'center'}
    //   bg={useColorModeValue('gray.50', 'gray.800')}>
    //   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    //   <Heading fontSize={'4xl'} textAlign={'center'}>
    //         Sign Up
    //       </Heading>
    //     <Stack align={'center'}>
    //     </Stack>
    //     <Box
    //       rounded={'lg'}
    //       bg={useColorModeValue('white', 'gray.700')}
    //       boxShadow={'lg'}
    //       p={8}>
    //       <Stack spacing={4}>
    //           <Box>
    //             <FormControl id="firstName" isRequired>
    //               <FormLabel>Full Name</FormLabel>
    //               <Input type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="Full Name" required/>
    //             </FormControl>
    //           </Box>
    //         <FormControl id="email" isRequired>
    //           <FormLabel>Email address</FormLabel>
    //           <Input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Email" required/>
    //         </FormControl>
    //         <FormControl id="password" isRequired>
    //           <FormLabel>Password</FormLabel>
    //           <InputGroup>
    //             <Input type={showPassword ? 'text' : 'password'} name="password" value={userInfo.password} onChange={handleChange} placeholder="Password" required/>
    //             <InputRightElement h={'full'}>
    //               <Button
    //                 variant={'ghost'}
    //                 onClick={() =>
    //                   setShowPassword((showPassword) => !showPassword)
    //                 }>
    //                 {showPassword ? <ViewIcon /> : <ViewOffIcon />}
    //               </Button>
    //             </InputRightElement>
    //           </InputGroup>
    //         </FormControl>
    //         <FormControl id="passwordOne" isRequired>
    //           <FormLabel>Password</FormLabel>
    //           <InputGroup>
    //             <Input type={showPasswordOne ? 'text' : 'password'} name="confirm" value={userInfo.confirm} onChange={handleChange} placeholder="Password" required/>
    //             <InputRightElement h={'full'}>
    //               <Button
    //                 variant={'ghost'}
    //                 onClick={() =>
    //                   setShowPasswordOne((showPasswordOne) => !showPasswordOne)
    //                 }>
    //                 {showPasswordOne ? <ViewIcon /> : <ViewOffIcon />}
    //               </Button>
    //             </InputRightElement>
    //           </InputGroup>
    //         </FormControl>
    //         <Stack spacing={10} pt={2}>
    //           <Button
    //             loadingText="Submitting"
    //             size="lg"
    //             bg={'blue.400'}
    //             color={'white'}
    //             _hover={{
    //               bg: 'blue.500',
    //             }}
    //             type="submit">
    //             Sign up
    //           </Button>
    //         </Stack>
    //         <Stack pt={6}>
    //           <Text align={'center'}>
    //             Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
    //           </Text>
    //         </Stack>
    //       </Stack>


    //       <FormControl isInvalid={isError}>
    //   <FormLabel htmlFor='email'>Password</FormLabel>
    //   <Input
    //     id='password'
    //     type='password'
    //     value={passwordInput}
    //     onChange={handlePasswordInputChange}
    //   />
    //   <FormLabel htmlFor='email'>Confirm Password</FormLabel>
    //   <Input
    //     id='password'
    //     type='password'
    //     value={confirmInput}
    //     onChange={handleConfirmInputChange}
    //   />
    //   {!isError ? (
    //     <FormHelperText>
    //       Enter the email you'd like to receive the newsletter on.
    //     </FormHelperText>
    //   ) : (
    //     <FormErrorMessage>Passwords Do Not Match</FormErrorMessage>
    //   )}
    // </FormControl>
          
    //     </Box>
    //     <p style={{display: userInfo.error ? "?" : "none"}}>&nbsp;{userInfo.error}</p>
    //   </Stack>
    // </Flex>
    // </form>
  );
}