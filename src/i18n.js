import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: {
                    personajes:"Characters",
                    casas:"Houses",
                    cronologia:"Chronology",
                    title:"Game of Thrones"
                },
			},
            es: {
                translation: {
                    personajes:"Personajes",
                    casas:"Casas",
                    cronologia:"Cronología",
                    title:"Juego de Tronos"
                }
            }
		},
	});

export default i18n;
