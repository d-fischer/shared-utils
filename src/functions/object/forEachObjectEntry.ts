export function forEachObjectEntry<T, Obj extends Record<string, unknown>>(
	obj: Obj,
	fn: (value: T, key: keyof Obj) => void
): void {
	(Object.entries(obj) as Array<[string, T]>).forEach(([key, value]) => fn(value, key as keyof Obj));
}
