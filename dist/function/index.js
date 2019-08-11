"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._ = Symbol();
exports.curry = (fn, arity = fn.length) => {
    let prev = [];
    return function _curry(...args) {
        const len = getArgLen(prev, args);
        prev = replaceParams(prev, args);
        if (len < arity) {
            return _curry;
        }
        else {
            return fn(...prev);
        }
    };
};
function getArgLen(prev, next = []) {
    return [...prev, ...next].filter(v => v !== exports._).length;
}
function replaceParams(prev = [], next = []) {
    const arr = [...next];
    const old = prev.map(v => {
        let item = v;
        if (arr.length > 0 && v === exports._) {
            item = arr.shift();
        }
        return item;
    });
    return [...old, ...arr];
}
function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => {
        let result;
        try {
            result = a(b(...args));
        }
        catch (err) {
            console.log(err.message);
        }
        return result;
    });
}
exports.compose = compose;
exports.first = (data) => data && data[0] || ``;
exports.last = (data) => data && data.slice(-1) || ``;
exports.prop = exports.curry((attr, data) => data && data[attr] || ``);
exports.wait = (time) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};
//# sourceMappingURL=index.js.map