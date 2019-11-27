import arrayToObject from './arrayToObject';

export default function entriesToObject<T>(obj: Array<[string, T]>): Record<string, T> {
	return arrayToObject<[string, T], T, Record<string, T>>(obj, ([key, val]) => ({ [key]: val }));
}
