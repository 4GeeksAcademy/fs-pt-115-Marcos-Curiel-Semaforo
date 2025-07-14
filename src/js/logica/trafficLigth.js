//Color de la segunda parte del linear gradient aleatorio
export const darkenColor = (hex, amount = 0.3) => {
	let num = parseInt(hex.replace("#", ""), 16);
	let r = (num >> 16) & 255;
	let g = (num >> 8) & 255;
	let b = num & 255;

	r = Math.max(0, Math.floor(r * (1 - amount)));
	g = Math.max(0, Math.floor(g * (1 - amount)));
	b = Math.max(0, Math.floor(b * (1 - amount)));

	return `rgb(${r}, ${g}, ${b})`;
};

//Numero Random
export const addRandomColor = (setExtraLigths) => {
	const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
	setExtraLigths(prev => [...prev, color]);
};

//Encender cualquiera de las 3 aletorias
export const alternateRandomColor = (setActiveLight) => {
	const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
	const index = Math.floor(Math.random() * 3);
	setActiveLight({ index, color });
};