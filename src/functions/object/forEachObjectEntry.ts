export default function forEachObjectEntry<T, Obj>(obj: Obj, fn: (value: T, key: keyof Obj) => void) {
	Object.entries(obj).forEach(([key, value]) => fn(value, key as keyof Obj));
}
