export default function splitWithLimit(str: string, delim: string, count: number) {
	const parts = str.split(delim);
	if (parts.length <= count) {
		return parts;
	}
	return [...parts.slice(0, count - 1), parts.slice(count - 1).join(delim)];
}
