import { quickSort } from "../quickSort";

test("Quick Sort Algo", () => {
  const arr = [9, 3, 7, 4, 6, 2, 1, 8, 5, 11, 10];
  quickSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  // console.log(arr);

  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const array = quickSort(arr);
  // console.log(array);
  // expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
