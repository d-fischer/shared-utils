import type { KeyMapper } from '../../types/object';

export function groupBy<T>(arr: T[], keyFn: Extract<keyof T, string> | KeyMapper<T>): Record<string, T[]> {
	if (typeof keyFn !== 'function') {
		const key = keyFn;
		// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-base-to-string
		keyFn = ((value: T) => (value[key] as unknown as object).toString()) as KeyMapper<T>;
	}

	const result: Partial<Record<string, T[]>> = {};

	for (const item of arr) {
		const groupKey = keyFn(item);
		(result[groupKey] ??= []).push(item);
	}

	return result as Record<string, T[]>;
}
