import React, { useContext } from "react";
import { ApiContext } from "../../context/Context";

const Characters = () => {
  const { characters } = useContext(ApiContext);
  console.log(characters);

  return (
    <>
      <div className="">
        {characters.map((person, i) => (
          <div key={i} className="">
            <ul>
              <li className="">Number id: {person.id}</li>
              <li className="">Name: {person.name}</li>
              <li className="">House: {person.house}</li>
              <li className="">Parents: {person.parents}</li>
              <li className="">Siblings: {person.siblings}</li>
              <li className="">Titles: {person.titles}</li>
              <li className="">Alliances: {person.alliances}</li>
              <li className="">Episodes: {person.episodes}</li>
              <li className="">Age: {person.age}</li>
              <li><img src={person.image} alt="Character Image" /></li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
