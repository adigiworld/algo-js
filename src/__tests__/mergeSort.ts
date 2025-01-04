import { mergeSort } from "../mergeSort";

test("Merge Sort Algo", () => {

  const arr = [9, 3, 12, 7, 4, 6, 2, 1, 8, 5, 11, 10];
  const a = mergeSort(arr);
  expect(a).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  // console.log(arr);
  // const arr = [9, 3, 12, 7, 4, 6, 2, 1, 8, 5, 11, 10];
  // mergeSort(arr);
  // expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  // const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // insertionSort(arr1);
  // expect(arr1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  // console.log(array);

  // const arr2 = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  // insertionSort(arr2);
  // expect(arr2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});
