import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
	return (
		<ul className="navLinks">
			<li>
				<Link className="navLink" to={"/characters"}>Personajes</Link>
			</li>
			<li>
				<Link className="navLink" to={"/houses"}>Houses</Link>
			</li>
			<li>
				<Link className="navLink" to={"/chronology"}>Chronology</Link>
			</li>
		</ul>
	);
};

export default Links;
