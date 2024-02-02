import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import Lang from "../../components/lang/Lang";
import axios from "axios";

const Houses = () => {
	const baseURL = "http://localhost:3000";
	const [houses, setHouses] = useState([]);

	const getHouses = async (name) => {
		try {
			if (name) {
				const housesApi = await axios.get(`${baseURL}/houses?name=${name}`);
				setHouses(housesApi.data);
				console.log(housesApi.data);
			} else {
				const housesApi = await axios.get(`${baseURL}/houses`);
				setHouses(housesApi.data); // Extraer los datos de la respuesta
			}
		} catch (error) {
			console.error("Error fetching houses:", error);
		}
	};
	useEffect(() => {
		getHouses();
	}, []);

	const urlJson = (name) => {
		getHouses(name);
		console.log(name);
	};

	// const array = houses.data
	return (
		<>
			<header className="header">
				<SearchBar urlJson={urlJson} />
				<Lang />
			</header>
			<div className="fondo">
				{houses.map((house, index) => (
					<div className="letras" key={index}>
						<h1 className="name"> {house.name}</h1>
						<Link to={`/DetailHouses/${house.id}`}>
							<div className="escudos">
								<img src={house.image} alt={house.name} />
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);

};

export default Houses;
