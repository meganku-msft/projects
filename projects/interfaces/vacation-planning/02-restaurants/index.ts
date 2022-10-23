// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.
export interface Restaurant {
	name: string;
	city: string;
}

export interface RestaurantResults {
	[city: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]) {
	let gr: RestaurantResults = {};
	for (let r of restaurants) {
		gr[r.city] ??= [];
		gr[r.city].push(r.name);
	}
	return gr;
}
