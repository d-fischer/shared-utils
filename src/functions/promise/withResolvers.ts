export interface PromiseWithResolvers<T = void, E extends Error = Error> {
	promise: Promise<T>;
	resolve: (value: T) => void;
	reject: (error: E) => void;
}

export function promiseWithResolvers<T = void, E extends Error = Error>(): PromiseWithResolvers<T, E> {
	// eslint-disable-next-line @typescript-eslint/init-declarations
	let resolve!: (value: T) => void;
	// eslint-disable-next-line @typescript-eslint/init-declarations
	let reject!: (error: E) => void;
	const promise = new Promise<T>((_resolve, _reject) => {
		resolve = _resolve;
		reject = _reject;
	});

	return { promise, resolve, reject };
}
