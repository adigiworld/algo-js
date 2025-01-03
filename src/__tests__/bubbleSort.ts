import { bubbleSort } from "../bubbleSort";

test("Bubble Sort Algo", () => {
  const arr = [9, 3, 7, 4, 69, 420, 42, 125, 245];
  bubbleSort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 125, 245, 420]);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  bubbleSort(array);
  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
