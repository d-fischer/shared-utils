const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> =>
	Object.assign(
		{},
		...Object.entries(obj)
			.filter(([key]) => keys.includes(key as K))
			.map(([key, value]) => ({ [key]: value }))
	);

export default pick;
