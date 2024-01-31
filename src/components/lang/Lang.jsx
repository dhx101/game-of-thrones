import React from "react";
import { useTranslation } from "react-i18next";
const lngs = {
	en: { nativeName: "English" },
	es: { nativeName: "Español" },
};
const Lang = () => {
	const { i18n } = useTranslation();
	return (
		<header className="header">
			<input type="text" />
			<div className="header-lang">
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
		</header>
	);
};

export default Lang;
