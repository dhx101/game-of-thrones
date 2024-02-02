import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Lang from "../../components/lang/Lang";

const baseURL = "http://localhost:3000";

function CharacterDetails() {
	const { id } = useParams();
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		const getCharacters = async () => {
			try {
				const charactersApi = await axios.get(
					`${baseURL}/characters/${id}`
				);
				setCharacters(charactersApi.data);
			} catch (error) {
				console.error("Error fetching characters:", error);
			}
		};
		getCharacters();
	}, [id]);

	return (
		<>
			<header className="header">
				<Link className="goBack" to={"/characters"}>
					&#129044;
				</Link>
				<Lang />
			</header>
			<div className="backgroundPageBack">
				<div className="backgroundPageBack-imagenPersonaje">
					<img
						className="backgroundPageBack-imagenPersonaje__image"
						src={characters.image}
						alt={characters.name}
					/>
				</div>
				<h1 className="backgroundPageBack__nombre"> {characters.name}</h1>
				<div className="backgroundPageBack-divDeReferencias">
					<h1 className="backgroundPageBack-divDeReferencias__titulosReferencias">
						Casa
					</h1>
					<div className="backgroundPageBack-divDeReferencias-referencias">
						<p className="backgroundPageBack-divDeReferencias-referencias__descripcionReferencias">
							{characters.house}
						</p>
					</div>
					<h1 className="backgroundPageBack-divDeReferencias__titulosReferencias">
						Padres
					</h1>
					<div className="backgroundPageBack-divDeReferencias-referencias">
						<p className="backgroundPageBack-divDeReferencias-referencias__descripcionReferencias">
							{characters.parents}
						</p>
					</div>
					<h1 className="backgroundPageBack-divDeReferencias__titulosReferencias">
						Hermanos
					</h1>
					<div className="backgroundPageBack-divDeReferencias-referencias">
						<p className="backgroundPageBack-divDeReferencias-referencias__descripcionReferencias">
							{characters.siblings}
						</p>
					</div>
					<h1 className="backgroundPageBack-divDeReferencias__titulosReferencias">
						Titulos
					</h1>
					<div className="backgroundPageBack-divDeReferencias-referencias">
						<p className="backgroundPageBack-divDeReferencias-referencias__descripcionReferencias">
							{characters.titles}
						</p>
					</div>
					<h1 className="backgroundPageBack-divDeReferencias__titulosReferencias">
						Alianzas
					</h1>
					<div className="backgroundPageBack-divDeReferencias-referencias">
						<p className="backgroundPageBack-divDeReferencias-referencias__descripcionReferencias">
							{characters.alliances}
						</p>
					</div>
					<h1 className="backgroundPageBack-divDeReferencias__titulosReferencias">
						Episodios
					</h1>
					<div className="backgroundPageBack-divDeReferencias-referencias">
						<p className="backgroundPageBack-divDeReferencias-referencias__descripcionReferencias">
							{characters.episodes}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default CharacterDetails;
