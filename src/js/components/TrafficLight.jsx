import { useState } from "react";

export const TrafficLight = ({ extraLigths, }) => {
	const [color, setColor] = useState("");

	const darkenColor = (hex, amount = 0.3) => {
		let num = parseInt(hex.replace("#", ""), 16);
		let r = (num >> 16) & 255;
		let g = (num >> 8) & 255;
		let b = num & 255;

		r = Math.max(0, Math.floor(r * (1 - amount)));
		g = Math.max(0, Math.floor(g * (1 - amount)));
		b = Math.max(0, Math.floor(b * (1 - amount)));

		return `rgb(${r}, ${g}, ${b})`;
	};

	return (
		<>
			<div className="traffic-light-top"></div>
			<div className="traffic-light-body">
				<span
					className={`${color === "red-light" ? "red-light" : ""}`}
					onClick={() => setColor("red-light")}
				>
				</span>
				<span
					className={`${color === "yellow-light" ? "yellow-light" : ""}`}
					onClick={() => setColor("yellow-light")}
				></span>
				<span
					className={`${color === "green-light" ? "green-light" : ""}`}
					onClick={() => setColor("green-light")}
				>
				</span>
				{extraLigths.map((color, index) => (
					<span
						key={index}
						style={{
							background: `radial-gradient(circle at 30% 30%, ${color}, ${darkenColor(color, 0.4)})`,
							boxShadow: `0 0 20px 5px ${color}80, inset 0 0 10px #000`,
						}}
					/>
				))}
			</div>
		</>
	);
};