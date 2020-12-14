import { ObjMap, ObjMapPart } from '../../types/object';

export function mapObject<T, O, Obj = Record<string, T>>(
	obj: Obj,
	fn: (value: T, key: Extract<keyof Obj, string>) => O
): ObjMap<Obj, O> {
	const mapped = Object.entries(obj).map(
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		([key, value]: [Extract<keyof Obj, string>, T]) => ({ [key]: fn(value, key) } as ObjMapPart<Obj, O>)
	);
	return Object.assign({}, ...mapped);
}
