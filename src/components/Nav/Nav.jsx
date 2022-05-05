import { Button, Flex, Spacer, Box, ButtonGroup, Heading } from '@chakra-ui/react';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styles from './Nav.module.css';

export default function Nav({ user, setUser }) {
    return (
        <div className={styles.Nav}>
            <Flex width='98%' alignItems='center' gap='2'>
                <Box display="flex" align="baseline" p='2'>
                        <Box mt={1} mr={1}><GiKnifeFork/></Box>
                        <Heading size='md'><Link to="/">Random Meal App</Link></Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='teal' variant='link'><Link to="/past-drinks">Past Drinks</Link></Button>
                    <Button colorScheme='teal' variant='link'><Link to="/search">Recipe Search</Link></Button>
                    <Button colorScheme='teal' variant='link'><Link to="/about">About</Link></Button>
                    <UserLogOut user={user} setUser={setUser} />
                </ButtonGroup>
            </Flex>
        </div>
    )
}