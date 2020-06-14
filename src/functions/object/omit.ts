import { pick } from './pick';

export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]) {
	return pick(obj, Object.keys(obj).filter(key => !keys.includes(key as K)) as K[]);
}
