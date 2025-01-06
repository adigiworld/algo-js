import { btbfs } from "../BTBFS";
import { tree } from "./trees";

test("BT BFS", () => {
  expect(btbfs(tree, 45)).toEqual(true);
  expect(btbfs(tree, 7)).toEqual(true);
  expect(btbfs(tree, 69)).toEqual(false);
});
