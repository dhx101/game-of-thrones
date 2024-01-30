import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
	const [characters, setCharacters] = useState([]);
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		const getCharacters = async () => {
            const charactersApi = await axios.get("https://rickandmortyapi.com/api/character")
            setCharacters(charactersApi)
        };
        getCharacters()
	}, []);
    
	useEffect(() => {
		const getHouses = async () => {};
	}, []);

	return (
		<ApiContext.Provider value={{ characters, houses }}>
			{children}
		</ApiContext.Provider>
	);
};
