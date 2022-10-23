// Write your Parrot class here! ✨
// You'll need to export it so the tests can run it.

export class Parrot {
	#name: string;
	#phrases: string[];

	constructor(name: string) {
		this.#name = name;
		this.#phrases = [`${this.#name} wants a cracker!`];
	}

	announce() {
		return `Squawk! I'm ${this.#name}!`;
	}

	learn(newLine: string) {
		this.#phrases.push(newLine);
	}

	speak() {
		const randomInt = Math.floor(Math.random() * this.#phrases.length);
		return this.#phrases[randomInt];
	}
}
