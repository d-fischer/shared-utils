export type ResolvableValue<T> = T | (() => T | Promise<T>);

export async function resolveConfigValue<T>(value: ResolvableValue<T>): Promise<T> {
	if (typeof value === 'function') {
		// eslint-disable-next-line @typescript-eslint/ban-types
		return await (value as () => T | Promise<T>)();
	}

	return value;
}

export type ResolvableValueSync<T> = T | (() => T);

export function resolveConfigValueSync<T>(value: ResolvableValueSync<T>): T {
	if (typeof value === 'function') {
		// eslint-disable-next-line @typescript-eslint/ban-types
		return (value as () => T)();
	}

	return value;
}
