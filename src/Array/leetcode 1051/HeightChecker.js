/**
 * @param {number[]} heights
 * @return {number}
 */
export let heightChecker = function (heights) {
  return heights.slice(0).sort((a, b) => a - b).reduce((final, value, index) => {
    return (value !== heights[index] ? ++final : final);
  }, 0);
};
