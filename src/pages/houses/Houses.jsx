import React, { useContext } from "react";
import { ApiContext } from "../../context/Context";


const Houses = () => {
  const { houses } = useContext(ApiContext);
  console.log(houses);
  // const array = houses.data
  return (
    <div>
      <h2>Houses</h2>
      {houses.map((house) => (
        <div key={house.id}>
          <h1 className="font-bold"> {house.name}</h1>
          <img className="h-auto max-w-full rounded-xl shadow" src={house.image} alt={house.name} />
        </div>
      ))}
    </div>
  );
};

export default Houses;
