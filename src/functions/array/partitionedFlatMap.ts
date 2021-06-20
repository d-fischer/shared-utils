export function partitionedFlatMap<T, R>(
	arr: T[],
	keyMapper: (val: T) => string,
	valueMapper: (val: T) => R | R[]
): Record<string, R[]> {
	const result: Record<string, R[]> = {};
	for (const entry of arr) {
		const key = keyMapper(entry);
		let values = valueMapper(entry);

		if (!Array.isArray(values)) {
			values = [values];
		}

		if (Object.prototype.hasOwnProperty.call(result, key)) {
			result[key]!.push(...values);
		} else {
			result[key] = values;
		}
	}
	return result;
}
