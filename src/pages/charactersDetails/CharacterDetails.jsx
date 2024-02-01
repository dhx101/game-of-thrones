import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../context/Context'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Lang from '../../components/lang/Lang';
const baseURL = "http://localhost:3000";


function CharacterDetails() {
    const {id} = useParams()
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
		const getCharacters = async () => {
		  try {
			const charactersApi = await axios.get(`${baseURL}/characters/${id}`);
			setCharacters(charactersApi.data);
		  } catch (error) {
			console.error('Error fetching characters:', error);
		  }
		};
		getCharacters();
	  }, [id]);

    return (
      <div >
        <header className="header">
				<Link to={"/houses"}> Atras </Link>
				<Lang />
			</header>
        <div  className="backgroundPageBack">
          <div className='backgroundPageBack__imagenPersonaje'>    
          <img  src={characters.image} alt={characters.name} />
          </div>
          <div className='backgroundPageBack__nombrePersonaje'>
          <h1> {characters.name}</h1>
          <h1>Nombre</h1>
          <p>{characters.house}</p>
          <h1>Casa</h1>
          <p>{characters.parents}</p>
          <h1>Padres</h1> 
          <p>{characters.siblings}</p>
          <h1>Hermanos</h1>
          <p>{characters.titles}</p>
          <h1>Titulos</h1>
          <p>{characters.alliances}</p>
          <h1>Alianzas</h1>
          <p>{characters.episodes}</p>
          <h1>Episodios</h1>
          <p>{characters.age}</p>
          <h1>Edad</h1>
          </div>
          
        </div>
      
    </div>
    )
  }
  
  export default CharacterDetails;



