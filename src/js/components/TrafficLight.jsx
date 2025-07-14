import { useState } from "react";
import { RandomButton } from "./RandomButton";
import { addRandomColor, darkenColor, alternateRandomColor } from "../logica/trafficLigth";

export const TrafficLight = () => {
	const [color, setColor] = useState("");
	const [extraLigths, setExtraLigths] = useState([]);
	const [activeLight, setActiveLight] = useState({ index: null, color: null })
	const [randomActive, setRandomActive] = useState(false)

	return (
		<>
			<section>
				<div className="traffic-light-top"></div>
				<div className="traffic-light-body">
					{/* Interactividad principal semaforo y map con la que hago que se hagan aleatorias las luces*/}
					{
						randomActive ?
							[0, 1, 2].map((i) => (
								<span
									onClick={() => { setRandomActive(false), setColor(i == 0 ? "red-light" : i == 1 ? "yellow-light" : "green-light") }}
									key={i}
									style={{
										backgroundColor: activeLight.index === i ? activeLight.color : "#2e2e2e",
									}}>
								</span>
							))
							:
							<>
								<span
									className={color === "red-light" && "red-light"}
									onClick={() => setColor("red-light")}
								>
								</span>
								<span
									className={color === "yellow-light" && "yellow-light"}
									onClick={() => setColor("yellow-light")}
								>
								</span>
								<span
									className={color === "green-light" && "green-light"}
									onClick={() => setColor("green-light")}
								>
								</span>
							</>

					}
					{/* Map de la luz extra aleatoria*/}
					{extraLigths.map((color, index) => (
						<span
							key={index}
							style={{
								background: `radial-gradient(circle at 30% 30%, ${color}, ${darkenColor(color, 0.4)})`,
								boxShadow: `0 0 20px 5px ${color}80, inset 0 0 10px #000`,
							}}>
						</span>
					))}

				</div>
				<div className="buttons">
					<div className="button-div">
						<RandomButton AddColor={() => addRandomColor(setExtraLigths)} />
					</div>
					<div className="button-div">
						<button onClick={() => { alternateRandomColor(setActiveLight), setRandomActive(true) }}>
							Active random color 🐱‍👓
						</button>
					</div>
				</div>
			</section>
		</>
	);
};