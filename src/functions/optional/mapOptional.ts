export function isNullish<T>(value: T | null | undefined): value is null | undefined {
	return value == null;
}

export function mapNullable<I, O>(value: I | null | undefined, cb: (val: I) => O): O | null {
	return isNullish(value) ? null : cb(value);
}

export function mapOptional<I, O>(value: I | null | undefined, cb: (val: I) => O): O | undefined {
	return isNullish(value) ? undefined : cb(value);
}
