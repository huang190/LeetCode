/**
 * @param {number} n
 * @return {number}
 */
export let sumNums = function (n) {
  return n === 0 ? 0 : n + sumNums(n - 1);
};