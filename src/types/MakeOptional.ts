// eslint-disable-next-line @typescript-eslint/ban-types
export type MakeOptional<T extends object, Keys extends keyof T> = { [K in Keys]?: T[K] } & {
	[K in Exclude<keyof T, Keys>]: T[K];
};
