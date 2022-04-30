import SearchBar from "../../components/SearchBar/SearchBar";
import React, { state, useState, useRef } from 'react';
import { Input } from '@chakra-ui/react';

export default function FoodPage({ user, setUser }) {

	const [value, setValue] = useState("");
	const [recipe, setRecipe] = useState("")

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
			<form onSubmit={getRecipe}>
			<Input variant='flushed' placeholder='Search for Recipes...' onChange={(e) => setValue(e.target.value)} />
			</form>
	)
}