import { Button } from '@chakra-ui/react';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import { Stack } from '@chakra-ui/react';
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export default function Nav({ user, setUser }) {
    return (
        <div>
            <Stack direction='row' spacing={4}>
                <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>Email</Button>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>Call us</Button>
                <UserLogOut user={user} setUser={setUser} />
            </Stack>

            {/* <button><Link to="/"><div>Home</div></Link></button>
            <button><Link to="/about"><div>About</div></Link></button>
            <button><Link to="/past-events"><div>Past Events</div></Link></button>
            <button>Log Out<BiLogOut size={42}/></button> */}
        </div>
    )
}