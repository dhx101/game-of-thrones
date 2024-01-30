import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
    const baseURL = "http://localhost:3000"
	const [characters, setCharacters] = useState([]);
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		const getCharacters = async () => {
            const charactersApi = await axios.get(`${baseURL}/characters`)
            setCharacters(charactersApi)
        };
        getCharacters()
	}, []);
    
	useEffect(() => {
		const getHouses = async () => {
            const housesApi = await axios.get(`${baseURL}/houses`)
            setHouses(housesApi)
        };
        getHouses()
	}, []);

	return (
		<ApiContext.Provider value={{ characters, houses }}>
			{children}
		</ApiContext.Provider>
	);
};
