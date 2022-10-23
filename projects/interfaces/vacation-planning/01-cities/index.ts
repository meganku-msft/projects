// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.
export interface Coords {
	north: [number, number, number];
	west: [number, number, number];
}

export interface City {
	name: string;
	coordinates: Coords;
	catchphrase?: string;
}

export function describeCity(city: City) {
	let result = city.name + ", New York\n";
	if (city.catchphrase) {
		result += `* "${city.catchphrase}"\n`;
	}
	const cN = city.coordinates.north.map((e) => {
		return e.toString().padStart(2, "0");
	});
	const cW = city.coordinates.west.map((e) => {
		return e.toString().padStart(2, "0");
	});

	result += `* Located at ${cN[0]}\xB0${cN[1]}'${cN[2]}"N ${cW[0]}\xB0${cW[1]}'${cW[2]}"W`;

	return result;
}
