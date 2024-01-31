import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
    const baseURL = "http://localhost:3000"
	const [characters, setCharacters] = useState([]);
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		const getCharacters = async () => {
		  try {
			const charactersApi = await axios.get(`${baseURL}/characters`);
			setCharacters(charactersApi.data); // Extraer los datos de la respuesta
		  } catch (error) {
			console.error('Error fetching characters:', error);
		  }
		};
		getCharacters();
	  }, []);
	
	  useEffect(() => {
		const getHouses = async () => {
		  try {
			const housesApi = await axios.get(`${baseURL}/houses`);
			setHouses(housesApi.data); // Extraer los datos de la respuesta
		  } catch (error) {
			console.error('Error fetching houses:', error);
		  }
		};
		getHouses();
	  }, []);



	return (
		<ApiContext.Provider value={{ characters, houses }}>
			{children}
		</ApiContext.Provider>
	);
};
