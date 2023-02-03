export const isFunction = (value: any): value is Function =>
  typeof value === 'function';

const runIfFn = <T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T => {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
};

export default runIfFn;
