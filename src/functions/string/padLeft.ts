export function padLeft(str: string | number, length: number, padding?: string) {
	if (typeof str === 'number') {
		str = str.toString();
	}

	length = length - str.length;
	if (length <= 0) {
		return str;
	}

	if (padding === undefined) {
		padding = ' ';
	}

	let paddingStr = '';

	do {
		/* eslint-disable no-bitwise */
		if ((length & 1) === 1) {
			paddingStr += padding;
		}
		length >>= 1;
		if (length) {
			padding += padding;
		}
		/* eslint-enable no-bitwise */
	} while (length);

	return paddingStr + str;
}
