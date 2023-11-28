const support = await import('@mostly-adequate/support');
const curry = support.curry;
const compose = support.compose;
const intercalate = support.intercalate;
const replace = support.replace;
const split = support.split;

/**
 * trace :: String -> a -> a
 * @description
 * Debugging function that prints the tag along with the argument to the console, then returns the argument unmodified. From page 30 of the book 'Mostly Adequate Guide to Functional Programming'.
 * @param {String} tag
 * @param {any} x
 * @returns {any}
 * @example
 * trace('after split', split(' ', 'hello world'));
 * // => ['hello', 'world']
 * trace('after replace', replace(/\s+/g, '-', 'hello world'));
 * // => 'hello-world'
 */
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});
