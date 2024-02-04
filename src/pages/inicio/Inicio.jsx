import React from "react";
import { useTranslation } from "react-i18next";
import Lang from "../../components/lang/Lang";


const Inicio = () => {
	const { t } = useTranslation();

	return (
		<>
			<header className="header">
      <span></span>
				<Lang />
			</header>
			<div className="inicio">
				<h1 className="inicio__title">{t("title")}</h1>
			</div>
		</>
	);
};

export default Inicio;
