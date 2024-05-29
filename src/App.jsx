import { useState } from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="font-opensans">
			<HomePage></HomePage>
		</div>
	);
}

export default App;
