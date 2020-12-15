export function utf8Length(str: string): number {
	return [...str].length;
}

export function utf8Substring(str: string, start: number, end?: number): string {
	return [...str].slice(start, end).join('');
}
