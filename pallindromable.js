'use strict';

const isPallindromable = (str) => {
  const c = new Set();
  [...str].forEach((s) => {
    if (c.has(s)) {
      c.delete(s)
    } else {
      c.add(s)
    }
  })
  return c.size <= 1;
};

console.log(isPallindromable('ababcd'));