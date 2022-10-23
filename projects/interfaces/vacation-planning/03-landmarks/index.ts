// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.

export interface Base {
	type: string;
	name: string;
}

export interface Fort extends Base {
	type: "fort";
}

export interface Lake extends Base {
	type: "lake";
	miles: number;
}

export interface Lighthouse extends Base {
	type: "lighthouse";
	height: number;
	lit: number;
}

export interface Mountain extends Base {
	type: "mountain";
	height: number;
}

export interface Park extends Base {
	type: "park";
	acres: number;
}

export interface River extends Base {
	type: "river";
	length: number;
	depth: number;
}

export interface Waterfall extends Base {
	type: "waterfall";
	height: number;
}

export type Landmark =
	| Fort
	| Lake
	| Lighthouse
	| Mountain
	| Park
	| River
	| Waterfall;

export function describeLandmark(p: Landmark) {
	let result = `${p.name} is a ${p.type} in Upstate New York.`;
	switch (p.type) {
		case "fort":
			break;
		case "lake":
			result += `\nIt covers ${p.miles} square miles of water.`;
			break;
		case "lighthouse":
			result += `\nIt was first lit in ${p.lit} and is ${p.height} feet high.`;
			break;
		case "mountain":
			result += `\nIts peak is ${p.height} feet high.`;
			break;
		case "park":
			result += `\nIt covers ${p.acres} square acres.`;
			break;
		case "river":
			result += `\nIt flows for ${p.length} miles and is ${p.depth} feet deep at its deepest.`;
			break;
		case "waterfall":
			result += `\nIt is ${p.height} feet high.`;
			break;
	}
	return result;
}
