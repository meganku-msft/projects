import { Ingredients } from "./solution";

export type Kitchen = {
	announce(): string;
	clean(time?: number): void;
	purchase(expense: number): boolean;
	prepare(recipe: Recipe): boolean;
};

export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Cleaner = (dirt: number, time?: number) => number;

export type Supplier = (expense: number) => Stock;

export type RecipeResultFailed = {
	succeeded: false;
};

export type RecipeResultSucceeded = {
	newStock: Stock;
	succeeded: true;
};

export type Recipe = (
	ingredients: Stock
) => RecipeResultFailed | RecipeResultSucceeded;

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt = 0;
	let stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	return {
		announce() {
			return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},
		clean(time?: number) {
			dirt = cleaner(dirt, time);
		},
		purchase(expense) {
			if (budget >= expense) {
				const newStock = supplier(expense);
				stock.breads += newStock.breads;
				stock.fruits += newStock.fruits;
				stock.sauces += newStock.sauces;
				stock.vegetables += newStock.vegetables;
				budget -= expense;
				return true;
			} else {
				return false;
			}
		},
		prepare(recipe: Recipe) {
			if (dirt < 100) {
				const recipeResult = recipe(stock);
				dirt += 1;
				if (recipeResult.succeeded) {
					stock = recipeResult.newStock;
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
	};
}
