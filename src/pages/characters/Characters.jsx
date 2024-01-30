import React, { useContext } from "react";
import { ApiContext } from "../../context/Context";

const Characters = () => {
  const { characters } = useContext(ApiContext);
  console.log(characters);

  return (
    <>
      <div className="character">
        {characters.map((person, i) => (
            <ul key={i} className="character-list">
              <li className="character-list__items">Number id: {person.id}</li>
              <li className="character-list__items">Name: {person.name}</li>
              <li className="character-list__items">House: {person.house}</li>
              <li className="character-list__items">Parents: {person.parents}</li>
              <li className="character-list__items">Siblings: {person.siblings}</li>
              <li className="character-list__items">Titles: {person.titles}</li>
              <li className="character-list__items">Alliances: {person.alliances}</li>
              <li className="character-list__items">Episodes: {person.episodes}</li>
              <li className="character-list__items">Age: {person.age}</li>
              <img className="character-list__image" src={person.image} alt="Character Image" />
            </ul>
        ))}
      </div>
    </>
  );
};

export default Characters;
