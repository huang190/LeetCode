import { sumNums } from "../SumNums";

describe('test SumNums', () => {
  test('should return 6 if it gives n 3', () => {
    const actual = sumNums(3);
    const expected = 6;
    expect(actual).toBe(expected);
  });

  test('should return 45 if it gives n 9', () => {
    const actual = sumNums(9);
    const expected = 45;
    expect(actual).toBe(expected);
  });
});