import React, { useState } from "react";
import { TrafficLight } from "./TrafficLight";
import { RandomButton } from "./RandomButton";

const Home = () => {
	const [extraLigths, setExtraLigths] = useState([]);

	const addRandomColor = () => {
		const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		setExtraLigths(prev => [...prev, color]);
	};

	return (
		<section>
			<TrafficLight extraLigths={extraLigths} />
			<RandomButton onAddColor={addRandomColor} />
		</section>
	);
};

export default Home;