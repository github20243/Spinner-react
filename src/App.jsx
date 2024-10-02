import React, { useState, useEffect } from "react";
import { Spinner } from "./components/Spinner";
import { Spinner2 } from "./components/Spinner2";
import { Spinner3 } from "./components/Spinner3";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 10000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Spinner isLoading={isLoading} />
			<Spinner2 isLoading={isLoading} />
			<Spinner3 isLoading={isLoading} />
		</>
	);
}

export default App;
