import React, { useState } from 'react';
import { List, ListItem, ListIcon, Center, Stack, Box, Heading, Text, SimpleGrid, Input, Flex, Container } from '@chakra-ui/react';
import Nav from "../../components/Nav/Nav";
import { IoIosPeople } from "react-icons/io";
import { GiCook } from "react-icons/gi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function FoodPage({ user, setUser }) {

	const [value, setValue] = useState("");
	const [recipe, setRecipe] = useState("");

	const fetch = require('node-fetch');
    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${value}`;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
			'X-RapidAPI-Key': 'db7ad4da20msh4d2d1504814051cp1cc87ejsn1272019f1e07'
		}
	};

	const getRecipe = async (evt) => {
			evt.preventDefault()
			try{
				console.log(value);
				const response = await fetch(url, options);
				const data = await response.json();
				setRecipe(data);
				console.log(data);
			} catch(e) {
				console.error(e)
			  }
			};


	return (
		<main>
			<Nav/>
			<Flex align={'center'} justify={'center'}>
				<Stack>
					<Box width='550px'>
						<form onSubmit={getRecipe}>
							<Input variant='flushed' placeholder='Search for Recipes...' onChange={(e) => setValue(e.target.value)} />
						</form>
					</Box>
					<Box width='550px'>
						<Center>
							<Text mt={4}>{recipe ? `See Results for: ${value}` : ''}</Text>
						</Center>
					</Box>
				</Stack>
			</Flex>
			<Flex align={'center'} justify={'center'} mt={6}>
				<Container maxW='1000px'>
					<SimpleGrid columns={1} spacingY='20px'>
						{
                    		recipe &&
                    		recipe.map((meal, idx) => {
                        		return (

									<Box p={5} shadow='md' borderWidth='1px'>
      									<Heading fontSize='xl'>{meal.title}</Heading>
										<List mt={4} spacing={3}>
            								<ListItem>
              									<ListIcon as={MdOutlineLocalGroceryStore} color="green.400" />
              									{meal.ingredients}
            								</ListItem>
											<ListItem>
              									<ListIcon as={GiCook} color="green.400" />
              									{meal.instructions}
            								</ListItem>
											<ListItem>
              									<ListIcon as={IoIosPeople} color="green.400" />
              									{meal.servings}
            								</ListItem>
										</List>
    								</Box>
								)
                    		})
                		}
					</SimpleGrid>
				</Container>
			</Flex>
		</main>
	)
}