import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack, Box, FormLabel, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React, { state, useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from '../../components/Nav/Nav';
import { createNote } from '../../utilities/notes-api';
import { Component } from "react";
// import axios from "axios";

export default function MainPage({ user, setUser }) {

    const firstField = React.useRef();
    const [startDate, setStartDate] = useState(new Date());
    const { isOpen, onClose, onOpen } = useDisclosure();
    const description = useRef();
  
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            console.log('Before Call')
            const response = await createNote({
                description: description.current.value
            })
            console.log('After Call')
        } catch(e) {
            console.log(e)
        }
      };

      return (
        <main>
            <Nav user={user} setUser={setUser} />
                {/* <input placeholder="Please Work..." type="text" ref={description}/>
                <input type="submit" value="create new note"/> */}
                <Button colorScheme='teal' onClick={onOpen}>
                    Create Note
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    initialFocusRef={firstField}
                    onClose={onClose}
                >
                <form onSubmit={handleSubmit}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Create a new account
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <FormLabel htmlFor='username'>Name</FormLabel>
                                    <Input
                                        ref={description}
                                        id='username'
                                        placeholder='Please enter user name'
                                    />
                                </Box>

                                <Box>
                                    <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                                    <Select id='owner' defaultValue='segun'>
                                        <option value='segun'>Segun Adebayo</option>
                                        <option value='kola'>Kola Tioluwani</option>
                                    </Select>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor='desc'>Description</FormLabel>
                                    <Textarea id='desc' />
                                </Box>

                                <Box>
                                    <DatePicker selected={startDate} onChange={(Date) => setStartDate(Date)} />
                                    {/* <input type="submit" value="create"/> */}
                                </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type="submit" colorScheme='blue'>Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                    </form>
                </Drawer>
        </main>
    )
}