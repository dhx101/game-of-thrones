import React, { useContext } from "react";
import { ApiContext } from "../../context/Context";
import { Link } from "react-router-dom";

const Characters = () => {
  const { characters } = useContext(ApiContext);

  return (
    <>
      <div className="character">
        {characters.map((Character) => (
          <div className="character-list" key={Character.id}>
            <h1>{Character.name}</h1>
            <Link to={`/characterDetails/${Character.id}`}>
                <div className="character-list__items">
                <img className="character-list__items__image" src={Character.image} alt={Character.name} />
                </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
