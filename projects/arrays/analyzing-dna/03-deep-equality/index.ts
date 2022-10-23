// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function deepEquality(a: string[][], b: string[][]): boolean {
	if (a.length !== b.length) {
		return false;
	}
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			return false;
		}
		const height = a[i].length;
		for (let j = 0; j < height; j++) {
			if (a[i][j] !== b[i][j]) {
				return false;
			}
		}
	}
	return true;
}
