import react from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const lngs = {
	en: { nativeName: "English" },
	es: { nativeName: "Español" },
};

const Lang = () => {
	const { i18n } = useTranslation();

	return (
		<div className="header-lang">
			<Link className="header-lang-home" to={"/"}>
				<img src="./assets/img/home.svg" alt="Home" />
			</Link>
			{Object.keys(lngs).map((lng) => (
				<img
					src={`./assets/img/${lng}.png`}
					alt={lng}
					key={lng}
					className={
						i18n.resolvedLanguage === lng
							? "selected header-lang-flag"
							: "header-lang-flag"
					}
					onClick={() => i18n.changeLanguage(lng)}
				/>
			))}
		</div>
	);
};

export default Lang;
