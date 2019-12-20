import pick from './pick';

const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]) =>
	pick(obj, Object.keys(obj).filter(key => !keys.includes(key as K)) as K[]);

export default omit;
