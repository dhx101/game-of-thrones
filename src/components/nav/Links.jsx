import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
	return (
		<div>
		<ul>
			<li>
				<Link to={"/characters"}>Personajes</Link>
			</li>
			<li>
				<Link to={"/houses"}>Houses</Link>
			</li>
			<li>
				<Link to={"/chronology"}>Chronology</Link>
			</li>
		</ul>
		</div>
	);
};

export default Links;
