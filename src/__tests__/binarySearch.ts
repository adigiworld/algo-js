import { binarySearch } from "../binarySearch";

test("Binary Search Algo", () => {
  const arr = [1, 2, 5, 7, 9, 37, 125, 314, 426, 1235, 2356, 4526, 20345, 63245];
  expect(binarySearch(arr, 5)).toEqual(true);
  expect(binarySearch(arr, 14)).toEqual(false);
  expect(binarySearch(arr, 125)).toEqual(true);
  expect(binarySearch(arr, 314)).toEqual(true);
  expect(binarySearch(arr, 1225)).toEqual(false);
  expect(binarySearch(arr, 4526)).toEqual(true);
  expect(binarySearch(arr, 63254)).toEqual(false);
});
