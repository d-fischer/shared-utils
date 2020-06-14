interface MatchStep<I, O> {
	on(predicate: (val: I) => boolean, fn: (val: I) => O): MatchStep<I, O>;
	otherwise(fn: (val: I) => O): O;
}

const matched = <I, O>(x: O): MatchStep<I, O> => ({
	otherwise: () => x,
	on: () => matched(x)
});

const match = <I, O>(x: I): MatchStep<I, O> => ({
	on: (predicate, fn) => (predicate(x) ? matched(fn(x)) : match(x)),
	otherwise: fn => fn(x)
});

export const eq = <T>(x: T) => <T2 extends T>(y: T2) => x === y;
match.eq = eq;

export { match };
