import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Lang from "../../components/lang/Lang";

const baseURL = "http://localhost:3000";

function CharacterDetails() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const charactersApi = await axios.get(`${baseURL}/characters/${id}`);
        setCharacters(charactersApi.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    getCharacters();

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
    getHouses();
  }, [id]);

  return (
    <>
      <header className="header">
        <Link className="goBack" to={"/characters"}>
          &#129044;
        </Link>
        <Lang />
      </header>

      <div className="description">
        <div className="description-img">
          <img
            className="description-img__image"
            src={characters.image}
            alt={characters.name}
          />
        </div>
        <div className="description-name">
          <h3 className="description-name__character"> {characters.name}</h3>
        </div>

        <div className="description-titles">
          <div className="description-titles-unitari">
            <h3 className="description-titles-unitari__title">Casa</h3>
            <div className="description-titles-unitari__subtitle">
              {houses.map(
                (item, index) =>
                  item.name === characters.house && (
                    <img
                      className="description-titles-unitari__subtitle__shield"
                      key={index}
                      src={item.image}
                      alt={item.name}
                    />
                  )
              )}
            </div>
          </div>
          <div className="description-titles-unitari">
            <h3 className="description-titles-unitari__title">Hermanos</h3>
            <div className="description-titles-unitari__subtitle">
              <ul className="description-titles-unitari__subtitle__text">
                {characters?.siblings?.map((description, i) => (
                  <li>{description}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="description-titles-unitari">
            <h3 className="description-titles-unitari__title">Padres</h3>
            <div className="description-titles-unitari__subtitle">
              <ul className="description-titles-unitari__subtitle__text">
                {characters?.parents?.map((description, i) => (
                  <li>{description}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="description-titles-unitari">
            <h3 className="description-titles-unitari__title">Titulos</h3>
            <div className="description-titles-unitari__subtitle">
              <ul className="description-titles-unitari__subtitle__text">
                {characters?.titles?.map((description, i) => (
                  <li>{description}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="description-titles-unitari">
            <h3 className="description-titles-unitari__title">Alianzas</h3>
            <div className="description-titles-unitari__subtitle">
              <ul className="description-titles-unitari__subtitle__text">
                {characters?.alliances?.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="description-titles-unitari">
            <h3 className="description-titles-unitari__title">Apariciones</h3>
            <div className="description-titles-unitari__subtitle">
              <ul className="description-titles-unitari__subtitle__text">
                {characters?.episodes?.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterDetails;
