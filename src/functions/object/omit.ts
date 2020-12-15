import { pick } from './pick';

export function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
	return pick(obj, Object.keys(obj).filter(key => !keys.includes(key as K)) as Array<keyof T>);
}
