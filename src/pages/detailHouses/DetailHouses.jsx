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
      <div className="setImage">
        <img className="fondo1img1" src={detailHouses.image} alt="bandera" />
      </div>

      <div className="fondo1name">
        <h1 className="fondo2name">House {detailHouses.name}</h1>
      </div>
      <div className="fondo1__titles1">
        <div className="fondo1__pro1">
          <h1 className="fondo1__titulos">SEDE</h1>
          <p className="fondo1__propiedades">{detailHouses.settlement}</p>
        </div>
        <div className="fondo1pro1">
          <h1 className="fondo1__titulos">REGION</h1>
          <p className="fondo1__propiedades">{detailHouses.region}</p>
        </div>
        <div className="fondo1pro1">
          <h1 className="fondo1__titulos">ALIANZAS</h1>
          <div className="p1">
          {detailHouses?.alliances?.map((house, index) => (
            <p key={index}>{house}</p>
          ))}
          </div>
        </div>
        <div className="fondo1pro1">
          <h1 className="fondo1__titulos">RELIGICIONES</h1>
          <p className="fondo1__propiedades">{detailHouses.religions}</p>
        </div>
        <div className="fondo1__pro1">
          <h1 className="fondo1__titulos">FUNDACION</h1>
          <p className="fondo1__propiedades">{detailHouses.foundation}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailHouses;
