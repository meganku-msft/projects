// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function shallowDifferences(a: string[], b: string[]) {
	if (a.length !== b.length) {
		return undefined;
	}
	const result = [];
	for (let index = 0; index < a.length; index++) {
		result[index] = a[index] === b[index] ? a[index] : undefined;
	}
	return result;
}
