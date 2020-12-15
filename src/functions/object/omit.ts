import { pick } from './pick';

// eslint-disable-next-line @typescript-eslint/ban-types
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
	return pick(obj, Object.keys(obj).filter(key => !keys.includes(key as K)) as Array<keyof T>);
}
