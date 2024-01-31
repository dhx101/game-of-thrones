import "./App.css";
import { ApiContextProvider } from "./context/Context";
import Main from "./pages/main/Main";
import { useTranslation } from "react-i18next";

const lngs = {
	en: { nativeName: "English" },
	es: { nativeName: "Español" },
};

function App() {
	const { t, i18n } = useTranslation();

	return (
		<>
			<ApiContextProvider>
				<Main />
			</ApiContextProvider>
		</>
	);
}

export default App;
