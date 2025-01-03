// import test from "node:test";
import { linearSearch } from "../linearSearch";

test("Linear search array", () => {
  const haystack = [1, 2, 5, 7, 9, 37, 125, 314, 426, 1235, 2356, 4526, 20345, 63245];
  expect(linearSearch(haystack, 5)).toEqual(true);
  expect(linearSearch(haystack, 125)).toEqual(true);
  expect(linearSearch(haystack, 5256)).toEqual(false);
  expect(linearSearch(haystack, 1235)).toEqual(true);
  expect(linearSearch(haystack, 203456)).toEqual(false);
  expect(linearSearch(haystack, 63245)).toEqual(true);
});
