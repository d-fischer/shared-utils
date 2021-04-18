export function isNullish<T>(value: T | null | undefined): value is null | undefined {
	return value == null;
}

export function mapOptional<I, O>(value: I | null, cb: (val: I) => O): O | null;
export function mapOptional<I, O>(value: I | undefined, cb: (val: I) => O): O | undefined;
export function mapOptional<I, O>(value: I | null | undefined, cb: (val: I) => O): O | null | undefined {
	if (isNullish(value)) {
		return value;
	}

	return cb(value);
}
