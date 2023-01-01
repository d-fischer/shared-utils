import type { ObjMap, ObjMapPart } from '../../types/object';

export function mapObject<T, O, Obj extends Record<string, unknown> = Record<string, T>>(
	obj: Obj,
	fn: (value: T, key: Extract<keyof Obj, string>) => O
): ObjMap<Obj, O> {
	const mapped = (Object.entries(obj) as Array<[string, T]>).map(
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		([key, value]) => ({ [key]: fn(value, key as Extract<keyof Obj, string>) } as ObjMapPart<Obj, O>)
	);
	return Object.assign({}, ...mapped) as ObjMap<Obj, O>;
}
