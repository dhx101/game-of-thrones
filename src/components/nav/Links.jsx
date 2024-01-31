import React from "react";
import { Link, useParams } from "react-router-dom";

const Links = () => {
	const {id} = useParams()
	console.log(id);
	return (
		<div>
		<ul className="nav">
			<li>
				<Link className="nav__item" to={"/characters"}>Personajes</Link>
			</li>
			<li>
				<Link className="nav__item" to={"/houses"}>Houses</Link>
			</li>
			<li>
				<Link className="nav__item" to={"/chronology"}>Chronology</Link>
			</li>
		</ul>
		</div>
	);
};

export default Links;
