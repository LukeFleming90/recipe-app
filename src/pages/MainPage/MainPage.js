import { SimpleGrid, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack, Box, FormLabel, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React, { state, useState, useRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from '../../components/Nav/Nav';
import { createNote } from '../../utilities/notes-api';
import { Component } from "react";
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import axios from "axios";

export default function MainPage({ user, setUser }) {

    const firstField = React.useRef();
    const [startDate, setStartDate] = useState(new Date());
    const [cocktail, setCocktail] = useState("");
    const [ newDrink, setNewDrink ] = useState({})
    const [ sent, setSent ] = useState(false);
	const [ emailText, setEmailText ] = useState({});
    const { isOpen, onClose, onOpen } = useDisclosure();
    const description = useRef();
    const [ isTrue, setIsTrue ] = useState(false)
    const [data, setData] = useState({
        description: "",
    });
  
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            console.log('Before Call')
            const response = await createNote({
                description: description.current.value
            })
            setData({
                description: ""
            })
            console.log('After Call')
        } catch(e) {
            console.log(e)
        }
      };

      const fetch = require('node-fetch');
      const url = 'https://the-cocktail-db.p.rapidapi.com/randomselection.php';
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
              'X-RapidAPI-Key': 'db7ad4da20msh4d2d1504814051cp1cc87ejsn1272019f1e07'
            }
        };

      const getCocktail = async () => {
        try{
            const response = await fetch(url, options);
            const data = await response.json();
            setCocktail(data);
        } catch(e) {
            console.error(e)
          }
        };

        const handleSend = async (e) => {
            setSent(true)
            try {
                await axios.post("http://localhost:3001/send_mail", {
                    text: newDrink.name,
                    user: user.email
                })
            } catch (error) {
                console.error(error)
            }
        }

        useEffect(() => {
            console.log(newDrink)
        },[isTrue])

      return (
        <main>
            <Nav user={user} setUser={setUser} />
                {/* <input placeholder="Please Work..." type="text" ref={description}/>
                <input type="submit" value="create new note"/> */}
                <Button colorScheme='teal' onClick={onOpen}>
                    Create Note
                </Button>
                <Button colorScheme='teal' onClick={getCocktail}>
                    Get Cocktail
                </Button>
                <Button onClick={handleSend}>Send Email</Button>
                <SimpleGrid columns={3} spacing={5}>
                        {
                            cocktail &&
                        cocktail.drinks.map((drink,idx) => {
                            console.log(drink)
                            return (<DrinkCard setNewDrink={setNewDrink} setIsTrue={setIsTrue} isTrue={isTrue} key={idx} image={drink.strDrinkThumb} type={drink.strAlcoholic} glass={drink.strGlass} name={drink.strDrink} category={drink.strCategory} instructions={drink.strInstructions} link={drink.strVideo} ingredient1={drink.strIngredient1} measurement1={drink.strMeasure1} ingredient2={drink.strIngredient2} measurement2={drink.strMeasure2} ingredient3={drink.strIngredient3} measurement3={drink.strMeasure3} ingredient4={drink.strIngredient4} measurement4={drink.strMeasure4} ingredient5={drink.strIngredient5} measurement5={drink.strMeasure5} ingredient6={drink.strIngredient6} measurement6={drink.strMeasure6} ingredient7={drink.strIngredient1} measurement7={drink.strMeasure7} ingredient8={drink.strIngredient8} measurement8={drink.strMeasure8} ingredient9={drink.strIngredient9} measurement9={drink.strMeasure9} ingredient10={drink.strIngredient10} measurement10={drink.strMeasure10} ingredient11={drink.strIngredient11} measurement11={drink.strMeasure11} ingredient12={drink.strIngredient12} measurement12={drink.strMeasure12} ingredient13={drink.strIngredient13} measurement13={drink.strMeasure13} ingredient14={drink.strIngredient14} measurement14={drink.strMeasure14} ingredient15={drink.strIngredient15} measurement15={drink.strMeasure15}/>)
                        })
                        }
                </SimpleGrid>
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
                                        value={data.description}
                                        id='username'
                                        placeholder='Please enter user name'
                                        onChange={(e) => setData(e.target.value)}
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