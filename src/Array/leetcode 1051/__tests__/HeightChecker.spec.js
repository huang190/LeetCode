import { heightChecker } from "../HeightChecker";

describe('test HeightChecker', () => {
  test('should return 3 if gives heights[1,1,4,2,1,3]', () => {
    const actual = heightChecker([1, 1, 4, 2, 1, 3]);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test('should return 5 if gives heights[5,1,2,3,4]', () => {
    const actual = heightChecker([5, 1, 2, 3, 4]);
    const expected = 5;
    expect(actual).toBe(expected);
  });

  test('should return 0 if gives heights[1,2,3,4,5]', () => {
    const actual = heightChecker([1, 2, 3, 4, 5]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});
