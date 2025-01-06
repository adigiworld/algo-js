import { compare } from "../binaryTree";
import { tree, tree2 } from "./trees";

test("BT Compare two Binary Tree", () => {
  expect(compare(tree, tree)).toEqual(true);
  expect(compare(tree, tree2)).toEqual(false);
});
