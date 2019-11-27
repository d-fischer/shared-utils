export default function flatten<T>(arr: T[][]) {
	return ([] as T[]).concat(...arr);
}
