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
        <div  className="letras"key={house.id}>
          <h1 className="name"> {house.name}</h1>
          <Link to={`/DetailHouses/${house.id}`}>
          <div className="escudos">    
          <img  src={house.image} alt={house.name} />
          
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Houses;
