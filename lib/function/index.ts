export function curry(fn: Function, arity = fn.length): any {
  return _curry(fn, arity);
}

const _curry = function _curry(fn: Function, arity = fn.length, ...args: any[]): any {
  const argLen = args.length;
  if (argLen < arity) {
    return _curry.bind(null, fn, arity, ...args);
  } else {
    return fn(...args);
  }
}

export function compose<T>(...funcs: Function[]): (args: any) => T {
  if (funcs.length === 0) {
    return arg => arg as T
  }

  if (funcs.length === 1) {
    return funcs[0] as () => T
  }

  return funcs.reduce((a, b) => (...args: Function[]) => {
    let result: any;
    try {
      result = a(b(...args))
    } catch(err) {
      console.log(err.message)
    }

    return result;
  }) as () => T
}

export const first = (data: any) => data && data[0] || ``
export const last = (data: any) => data && data.slice(-1) || ``
export const prop = curry((attr: any, data: any) => data && data[attr] || ``) 

export const wait = (time: number) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  })
}

