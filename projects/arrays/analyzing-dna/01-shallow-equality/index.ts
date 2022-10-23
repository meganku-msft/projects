// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.

export function shallowEquality(a: string[], b: string[]): boolean {
	if (b.length > a.length) {
		return false;
	}
	for (let index = 0; index < a.length; index++) {
		if (a[index] !== b[index]) {
			return false;
		}
	}
	return true;
}
