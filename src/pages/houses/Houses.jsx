import React, { useContext } from "react";
import { ApiContext } from "../../context/Context";
import { Link } from "react-router-dom";

const Houses = () => {
  const { houses } = useContext(ApiContext);
  console.log(houses);
  
  // const array = houses.data
  return (
    <div className="fondo">
      {houses.map((house) => (
        <div key={house.id}>
          <div className="fondo__nombre">
          <h1> {house.name}</h1>
          </div>
          <Link to={`/DetailHouses/${house.id}`}>
          <div className="fondo__escudos">    
          <img  src={house.image} alt={house.name} />
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Houses;
