import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
const lngs = {
	en: { nativeName: "English" },
	es: { nativeName: "Español" },
};

const Lang = ({urlJson}) => {
	const { t, i18n } = useTranslation();


	return (
		<header className="header">
			<div className="header-searchbar">
				<label for="name-input">{t("nombre")}</label>
				<input type="text" id="name-input" 
				onChange={(e)=> {
					urlJson(e.target.value)
				}}
				 />
			</div>
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
