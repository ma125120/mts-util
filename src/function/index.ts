
export const _ = Symbol();

export const curry = (fn: Function, arity = fn.length): (...args: any[]) => any => {
  let prev: [] = [];
  return function _curry(...args: []) {
    const len = getArgLen(prev, args);
    prev = replaceParams(prev, args);
    if (len < arity) {
      return _curry;
    } else {
      return fn(...prev)
    }
  }
}

function getArgLen(prev: [], next: [] = []): number {
  return [...prev, ...next].filter(v => v !== _).length;
}

function replaceParams(prev: [] = [], next: [] = []): [] {
  const arr = [...next];
  const old = prev.map(v => {
    let item: any = v;
    if (arr.length > 0 && v === _) {
      item = arr.shift();
    }
    return item;
  });

  return [...old, ...arr] as []
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

