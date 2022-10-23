// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
export type onVowel = (input: string) => string;
export type onConsonant = (input: string) => string;
export type onPunctuation = (input: string) => string;

export function createAdvancedCipher(
	vowelFunc: onVowel,
	consFunc: onConsonant,
	puncFunc: onPunctuation
) {
	return (text: string) => {
		let result = "";
		for (const character of text) {
			if (character.match(/[aeiou]/i)) {
				result += vowelFunc(character);
			} else if (character.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
				result += consFunc(character);
			} else {
				result += puncFunc(character);
			}
		}
		return result;
	};
}
