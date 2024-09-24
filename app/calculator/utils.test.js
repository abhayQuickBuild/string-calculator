import { add } from './utils';

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return sum of numbers separated by commas', () => {
  expect(add("1,2,3")).toBe(6);
});

test('should handle new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should handle different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw an error for negative numbers', () => {
  expect(() => add("1,-2")).toThrow('negative numbers not allowed: -2');
});

test('should return 3 for "//;\n1;2"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
