export function immutableSplice<T>(arr: T[], start: number, deleteCount: number, ...addItems: T[]): T[] {
	return [...arr.slice(0, start), ...addItems, ...arr.slice(start + deleteCount)];
}
