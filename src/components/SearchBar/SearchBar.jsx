import styles from './SearchBar.module.css';
import { Input } from '@chakra-ui/react';

export default function Logo() {
return (
  <div>
      <Input variant='flushed' placeholder='Search for Recipes...' />
  </div>
);
}