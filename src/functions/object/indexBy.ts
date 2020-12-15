import type { KeyMapper } from '../../types/object';
import { arrayToObject } from './arrayToObject';

export function indexBy<T>(arr: T[], keyFn: Extract<keyof T, string> | KeyMapper<T>): Record<string, T> {
	if (typeof keyFn !== 'function') {
		const key = keyFn;
		// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-base-to-string
		keyFn = ((value: T) => ((value[key] as unknown) as object).toString()) as KeyMapper<T>;
	}
	return arrayToObject<T, T, Record<string, T>>(arr, val => ({ [(keyFn as KeyMapper<T>)(val)]: val }));
}
