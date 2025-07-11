import { use } from "react";
import { useState } from "react";
export const TrafficLight = () => {

	const [color, setColor] = useState("")

	return (
		<>
			<section>
				<div className="traffic-light-top"></div>
				<div className="traffic-light-body">
					<span
						onClick={() => setColor("red-light")}
						className={`${color == "red-light" ? "red-light" : ""}`}
					>
					</span>
					<span
						onClick={() => setColor("yellow-light ")}
						className={`${color === "yellow-light " ? "yellow-light" : ""}`}></span>
					<span
						onClick={() => setColor("green-light ")}
						className={`${color === "green-light " ? "green-light " : ""}`}></span>
				</div>
			</section>
		</>
	);
}