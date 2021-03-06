import type { ObjMap, ObjMapPart } from '../../types/object';

export function arrayToObject<T, O, Obj>(arr: T[], fn: (value: T) => ObjMapPart<Obj, O>): ObjMap<Obj, O> {
	return Object.assign({}, ...arr.map(fn)) as ObjMap<Obj, O>;
}
