import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../inicio/Inicio";
import Characters from "../characters/Characters";
import Houses from "../houses/Houses";
import Chronology from "../chronology/Chronology";
import Links from "../../components/nav/Links";
import DetailHouses from "../detailHouses/DetailHouses";
import Lang from "../../components/lang/Lang";
import CharactersDetails from "../charactersDetails/CharacterDetails";
import axios from "axios";

const Main = () => {
	const baseURL = "http://localhost:3000";
	const [characters, setCharacters] = useState([]);

	const getCharacters = async (name) => {
		try {
			if(name) {
				const charactersApi = await axios.get(`${baseURL}/characters?name=${name}`);
				console.log(`${baseURL}/characters?name=${name}`);
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
			<BrowserRouter>
				<div>
					<Lang urlJson={urlJson} />
				</div>
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route
						path="/characters"
						element={<Characters characters={characters} />}
					/>
					<Route
						path="/characterDetails/:id"
						element={<CharactersDetails />}
					/>
					<Route path="/houses" element={<Houses />} />
					<Route path="/chronology" element={<Chronology />} />
					<Route path="/DetailHouses/:id" element={<DetailHouses />} />
				</Routes>
				<Links />
			</BrowserRouter>
		</>
	);
};

export default Main;
