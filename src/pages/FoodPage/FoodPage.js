import SearchBar from "../../components/SearchBar/SearchBar";
import React, { state, useState, useRef } from 'react';
import { Input } from '@chakra-ui/react';
import axios from "axios";

export default function FoodPage({ user, setUser }) {

	const [value, setValue] = useState("");
	const [recipe, setRecipe] = useState("");
	const [ sent, setSent ] = useState(false);
	const [ text, setText ] = useState("");
	const handleSend = async (e) => {
		setSent(true)
		try {
			await axios.post("http://localhost:3001/send_mail", {
				text: text,
				user: user.email
			})
		} catch (error) {
			console.error(error)
		}
	}

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
		// <form onSubmit={getRecipe}>
		// 	<Input variant='flushed' placeholder='Search for Recipes...' onChange={(e) => setValue(e.target.value)} />
		// 	</form>
		<>
				<form onSubmit={handleSend}>
					<Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
					<button type="submit">Send Email</button>
				</form>
		</>
	)
}