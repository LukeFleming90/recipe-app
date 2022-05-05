import { Slider, SliderMark, SliderTrack, SliderFilledTrack, Tooltip, SliderThumb, StackDivider, VStack, Text, Flex, SimpleGrid, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack, Box, FormLabel, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from '../../components/Nav/Nav';
import { createNote } from '../../utilities/notes-api';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import axios from "axios";
import Footer from '../../components/Footer/Footer';
import { FaCocktail } from "react-icons/fa";
import { HiPencilAlt, HiOutlineMail } from "react-icons/hi";

export default function MainPage({ user, setUser }) {

    const firstField = React.useRef();
    const [startDate, setStartDate] = useState(new Date());
    const [cocktail, setCocktail] = useState("");
    const [newDrink, setNewDrink] = useState({})
    const [sent, setSent] = useState(false);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const description = useRef();
    const title = useRef();
    const [isTrue, setIsTrue] = useState(false)
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
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
        } catch (e) {
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
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setCocktail(data);
            setSent(false);
        } catch (e) {
            console.error(e)
        }
    };

    const handleSend = async (e) => {
        setSent(true)
        try {
            await axios.post("http://localhost:3001/send_mail", {
                name: newDrink.name,
                description: newDrink.instructions,
                item1: `${newDrink.ingredient1}: ${newDrink.measurement1}`,
                item2: `${newDrink.ingredient2}: ${newDrink.measurement2}`,
                item3: `${newDrink.ingredient3}: ${newDrink.measurement3}`,
                item4: `${newDrink.ingredient4}: ${newDrink.measurement4}`,
                item5: `${newDrink.ingredient5}: ${newDrink.measurement5}`,
                item6: `${newDrink.ingredient6}: ${newDrink.measurement6}`,
                item7: `${newDrink.ingredient7}: ${newDrink.measurement7}`,
                item8: `${newDrink.ingredient8}: ${newDrink.measurement8}`,
                item9: `${newDrink.ingredient9}: ${newDrink.measurement9}`,
                item10: `${newDrink.ingredient10}: ${newDrink.measurement10}`,
                item11: `${newDrink.ingredient11}: ${newDrink.measurement11}`,
                item12: `${newDrink.ingredient12}: ${newDrink.measurement12}`,
                item13: `${newDrink.ingredient13}: ${newDrink.measurement13}`,
                item14: `${newDrink.ingredient14}: ${newDrink.measurement14}`,
                item15: `${newDrink.ingredient15}: ${newDrink.measurement15}`,
                user: user.email
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        console.log(newDrink.name)
    }, [isTrue])

    return (
        <main>
            <Nav user={user} setUser={setUser} />
            <Flex align={'center'} justify={'center'}>
                <Stack direction='row' spacing={4} mt={7}>
                    <Button colorScheme='teal' onClick={onOpen} leftIcon={<HiPencilAlt />}>
                        Create Note
                    </Button>
                    <Button colorScheme='teal' onClick={getCocktail} leftIcon={<FaCocktail />}>
                        Get Cocktail
                    </Button>
                    <Button onClick={handleSend} leftIcon={<HiOutlineMail />}>Send Email</Button>
                </Stack>
            </Flex>
            <Flex align={'center'} justify={'center'}>
                <VStack mt={8} divider={<StackDivider borderColor='gray.200' />} spacing={4}>
                    <Text >{`Current Drink Selection is: ${newDrink.name ? newDrink.name : `No Selection Made Yet...`}`}</Text>
                    <Text >{`${sent ? `${newDrink.name} details emailed to ${user.email}` : `No Drink Details Emailed Yet...`}`}</Text>
                </VStack>
            </Flex>
            <SimpleGrid columns={3} spacing={5}>
                {
                    cocktail &&
                    cocktail.drinks.map((drink, idx) => {
                        console.log(drink)
                        return (<DrinkCard setNewDrink={setNewDrink} setIsTrue={setIsTrue} isTrue={isTrue} key={idx} image={drink.strDrinkThumb} type={drink.strAlcoholic} glass={drink.strGlass} name={drink.strDrink} category={drink.strCategory} instructions={drink.strInstructions} link={drink.strVideo} ingredient1={drink.strIngredient1} measurement1={drink.strMeasure1} ingredient2={drink.strIngredient2} measurement2={drink.strMeasure2} ingredient3={drink.strIngredient3} measurement3={drink.strMeasure3} ingredient4={drink.strIngredient4} measurement4={drink.strMeasure4} ingredient5={drink.strIngredient5} measurement5={drink.strMeasure5} ingredient6={drink.strIngredient6} measurement6={drink.strMeasure6} ingredient7={drink.strIngredient1} measurement7={drink.strMeasure7} ingredient8={drink.strIngredient8} measurement8={drink.strMeasure8} ingredient9={drink.strIngredient9} measurement9={drink.strMeasure9} ingredient10={drink.strIngredient10} measurement10={drink.strMeasure10} ingredient11={drink.strIngredient11} measurement11={drink.strMeasure11} ingredient12={drink.strIngredient12} measurement12={drink.strMeasure12} ingredient13={drink.strIngredient13} measurement13={drink.strMeasure13} ingredient14={drink.strIngredient14} measurement14={drink.strMeasure14} ingredient15={drink.strIngredient15} measurement15={drink.strMeasure15} />)
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
                            Create a Drink Review
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <FormLabel htmlFor='username'>Drink Name</FormLabel>
                                    <Input
                                        value={newDrink.name}
                                        id='title'
                                        isDisabled={true}
                                        variant='flushed'
                                    />
                                </Box>

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

                                <Box>
                                    <Slider
                                        id='slider'
                                        defaultValue={5}
                                        min={0}
                                        max={10}
                                        colorScheme='teal'
                                        onChange={(v) => setSliderValue(v)}
                                        onMouseEnter={() => setShowTooltip(true)}
                                        onMouseLeave={() => setShowTooltip(false)}
                                    >
                                        <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
                                            0
                                        </SliderMark>
                                        <SliderMark value={5} mt='1' ml='-2.5' fontSize='sm'>
                                            5
                                        </SliderMark>
                                        <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
                                            10
                                        </SliderMark>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={showTooltip}
                                            label={`${sliderValue}`}
                                        >
                                            <SliderThumb />
                                        </Tooltip>
                                    </Slider>
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
            <Footer />
        </main>
    )
}