// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function splitLines(text: string, width: number) {
	const words = text.split(" ");

	let result: string[] = [];
	let idx = 0;
	let currString = "";
	words.forEach((word) => {
		if (idx === 0) {
			currString += word;
		} else if (idx + currString.length < width) {
			currString += ` ${word}`;
			idx += 1;
		} else {
			result.push(currString);
			idx = 0;
			currString = word;
		}
		idx += word.length;
	});
	result.push(currString);
	return result;
}

export function alignLines(
	text: string[],
	{ align = "left", width }: AlignmentOptions
) {
	const result: string[] = [];
	text.forEach((line) => {
		const spaces = width - line.length;
		let newString = line;

		switch (align) {
			case "left":
				for (let i = 0; i < spaces; i++) {
					newString += " ";
				}
				break;
			case "middle":
				for (let i = 0; i < Math.floor(spaces / 2); i++) {
					newString = " " + newString;
				}
				for (let i = 0; i < Math.ceil(spaces / 2); i++) {
					newString += " ";
				}
				break;
			case "right":
				for (let i = 0; i < spaces; i++) {
					newString = " " + newString;
				}
				break;
		}
		result.push(newString);
	});
	return result;
}

export function alignTexts(texts: string[], options: AlignmentOptions) {
	const result: string[][] = [];
	texts.forEach((quote) => {
		let split = splitLines(quote, options.width);
		result.push(alignLines(split, options));
	});
	return result;
}
