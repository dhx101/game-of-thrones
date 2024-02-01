// import React, { useContext } from "react";
// import { ApiContext } from "../../context/Context";
import { Link } from "react-router-dom";

const Characters = ({characters}) => {
  // const { characters } = useContext(ApiContext);

  return (
    <>
      <div className="character">
        {characters.map((Character) => (
          <div className="character-list" key={Character.id}> 
            <Link className="character-list-a" to={`/characterDetails/${Character.id}`}>
                <div className="character-list-a__items">
                <img className="character-list-a__items__image" src={Character.image} alt={Character.name} />
                <h1 className="character-list-a__items__nombrePersonaje">{Character.name}</h1>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
