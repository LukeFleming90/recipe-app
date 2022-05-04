import Logo from "../Logo/Logo";
import { ButtonGroup, Container, IconButton, Stack, Text, Link } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {

    return (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
          <Link href="https://www.linkedin.com/in/luke-ryan-fleming/" isExternal><IconButton
            as="a"
            aria-label="LinkedIn"
            target="_blank"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          </Link>
          <Link href="https://github.com/LukeFleming90" isExternal><IconButton as="a" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />}/></Link>
          <Link href="mailto:lukefleming90@gmail.com" isExternal><IconButton
            as="a"
            aria-label="Email"
            icon={<FaEnvelope fontSize="1.25rem" />}
          />
          </Link>
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} SEI Madeline Team 3, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
  )
}