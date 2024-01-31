import React from 'react'
import { useTranslation } from 'react-i18next';

const lngs ={
  en: { nativeName: "English" },
	es: { nativeName: "Español" },
}

const Inicio = () => {

	const { t, i18n } = useTranslation();

  return (
    <div className='inicio'>
      <h1 className='inicio__title'>{t("title")}</h1>
    </div>
  )
}

export default Inicio
