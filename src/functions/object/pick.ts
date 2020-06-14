export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
	return Object.assign(
		{},
		...Object.entries(obj)
			.filter(([key]) => keys.includes(key as K))
			.map(([key, value]) => ({ [key]: value }))
	);
}
