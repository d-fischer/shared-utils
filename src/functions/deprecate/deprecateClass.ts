import type { Constructor } from '../../types/constructor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/naming-convention
export function deprecateClass<T extends Constructor<any>>(Base: T, msg: string): T {
	let deprecateNoticeShown = false;
	return class extends Base {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		constructor(...args: any[]) {
			if (!deprecateNoticeShown) {
				// eslint-disable-next-line no-console
				console.warn(msg);
				deprecateNoticeShown = true;
			}
			super(...args);
		}
	};
}
