import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Links = () => {
	const { t } = useTranslation();
	return (
		<div>
			<ul className="nav">
				<li>
					<Link className="nav__item" to={"/characters"}>
						{t("personajes")}
					</Link>
				</li>
				<li>
					<Link className="nav__item" to={"/houses"}>
						{t("casas")}
					</Link>
				</li>
				<li>
					<Link className="nav__item" to={"/chronology"}>
						{t("cronologia")}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Links;
