// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(
	a: string[][],
	b: string[][]
): ((string | undefined)[] | undefined)[] | undefined {
	if (a.length !== b.length) {
		return undefined;
	}
	const result: ((string | undefined)[] | undefined)[] = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			result.push(undefined);
			continue;
		}
		const height = a[i].length;
		const rowResult = [];
		for (let j = 0; j < height; j++) {
			rowResult.push(a[i][j] === b[i][j] ? a[i][j] : undefined);
		}
		result.push(rowResult);
	}
	return result;
}
