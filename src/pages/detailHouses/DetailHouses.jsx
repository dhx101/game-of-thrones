import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
const baseURL = "http://localhost:3000";

function DetailHouses() {
  const { id } = useParams();
  const [detailHouses, setDetailouses] = useState([]);

  useEffect(() => {
    const getdetailHouses = async () => {
      try {
        const detailHousesApi = await axios.get(`${baseURL}/houses/${id}`);
        setDetailouses(detailHousesApi.data); // Extraer los datos de la respuesta
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };
    getdetailHouses();
  }, [id]);

  return (
    <div className="fondo1">
      <div className="fondo1__fondo2" key={detailHouses.id}>
        <h1 className="fondo1__fondo2__nombre1"> {detailHouses.name}</h1>
        <h1>SEDE</h1>
        <p>{detailHouses.settlement}</p>
        <h1>REGION</h1>
        <p>{detailHouses.region}</p>
        <h1>ALIANZAS</h1>
        <p>{detailHouses.alliances}</p>
        <h1>RELIGICIONES</h1>
        <p>{detailHouses.religions}</p>
        <h1>FUNDACION</h1>
        <p>{detailHouses.foundation}</p>
        <img  className="img1"src={detailHouses.image} alt={detailHouses.name} />
      </div>
    </div>
  );
}

export default DetailHouses;
