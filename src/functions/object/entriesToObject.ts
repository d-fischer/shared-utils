import { arrayToObject } from './arrayToObject';

export function entriesToObject<T>(obj: Array<[string, T]>): Record<string, T> {
	return arrayToObject<[string, T], T, Record<string, T>>(obj, ([key, val]) => ({ [key]: val }));
}
