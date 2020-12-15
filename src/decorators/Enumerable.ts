/* eslint-disable @typescript-eslint/naming-convention */
export function Enumerable(enumerable = true): PropertyDecorator {
	return function (target, key) {
		// first property defined in prototype, that's why we use getters/setters
		// (otherwise assignment in object will override property in prototype)
		Object.defineProperty(target, key, {
			get: function () {
				return;
			},
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			set: function (this: any, val: unknown) {
				// here we have a reference to the instance and can set property directly to it
				Object.defineProperty(this, key, {
					value: val,
					writable: true,
					enumerable
				});
			},

			enumerable
		});
	};
}

/** @deprecated use Enumerable(false) instead */
// eslint-disable-next-line @typescript-eslint/ban-types
export function NonEnumerable(target: Object, key: string): void {
	Enumerable(false)(target, key);
}
