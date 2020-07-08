import { Constructor } from '../../types/constructor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/naming-convention
export function deprecateClass<T extends Constructor<{}>>(Base: T, msg: string): T {
	let deprecateNoticeShown = false;
	return class extends Base {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		constructor(...args: any[]) {
			if (!deprecateNoticeShown) {
				// eslint-disable-next-line no-console
				console.warn(`[deprecated] ${Base.name} - ${msg}`);
				deprecateNoticeShown = true;
			}
			super(...args);
		}
	};
}
