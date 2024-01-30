import "./App.css";
import { ApiContextProvider } from "./context/Context";
import Main from "./pages/main/Main";

function App() {
	return (
		<><ApiContextProvider>
			<Main />
    </ApiContextProvider>

		</>
	);
}

export default App;
