export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export default runIfFn;
