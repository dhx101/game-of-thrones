// import React, { useContext } from "react";
// import { ApiContext } from "../../context/Context";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import Lang from "../../components/lang/Lang";
import { useEffect, useState } from "react";
import axios from "axios";



const Characters = () => {
  // const { characters } = useContext(ApiContext);
  const baseURL = "http://localhost:3000";
	const [characters, setCharacters] = useState([]);

	const getCharacters = async (name) => {
		try {
			if (name) {
				const charactersApi = await axios.get(
					`${baseURL}/characters?name=${name}`
				);
				setCharacters(charactersApi.data);
			} else {
				const charactersApi = await axios.get(`${baseURL}/characters`);
				setCharacters(charactersApi.data); // Extraer los datos de la respuesta
			}
		} catch (error) {
			console.error("Error fetching characters:", error);
		}
	};
	useEffect(() => {
		getCharacters();
	}, []);

	const urlJson = (name) => {
		getCharacters(name);
	};
  return (
    <>
    <header className="header">
        <SearchBar urlJson={urlJson} />
        <Lang />
      </header>
      <div className="character">
        {characters.map((Character) => (
          <div className="character-list" key={Character.id}> 
            <Link className="character-list-a" to={`/characterDetails/${Character.id}`}>
                <div className="character-list-a__items">
                <img className="character-list-a__items__image" src={Character.image} alt={Character.name} />
                <h1 className="character-list-a__items__nombrePersonaje">{Character.name}</h1>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
