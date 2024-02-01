import React from "react";

import { useTranslation } from "react-i18next";

const SearchBar = ({urlJson}) => {
    const { t } = useTranslation();
  return (
    <div className="header-searchbar">
				<label for="name-input">{t("nombre")}</label>
				<input type="text" id="name-input" 
				onChange={(e)=> {
					urlJson(e.target.value)
				}}
				 />
			</div>
  )
}

export default SearchBar
