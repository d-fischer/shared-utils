export function* fibWithLimit(limit: number): Iterator<number, never> {
	let current = 0;
	let next = 1;

	while (current < limit) {
		yield current;
		[current, next] = [next, current + next];
	}

	while (true) {
		yield limit;
	}
}
