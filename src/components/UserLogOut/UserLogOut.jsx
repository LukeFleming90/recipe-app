import { logOut } from '../../utilities/users-service';
import { BiLogOut } from "react-icons/bi";
import { Button } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
    <>
      <Button onClick={handleLogOut} colorScheme='teal' variant='link'>Log Out</Button>
    </>
  );
}