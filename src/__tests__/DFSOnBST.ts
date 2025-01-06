
import { dfsOnBST } from "../DFSOnBST";
import { tree } from "./trees";

test("DFS on BST", function() {
  expect(dfsOnBST(tree, 45)).toEqual(true);
  expect(dfsOnBST(tree, 7)).toEqual(true);
  expect(dfsOnBST(tree, 69)).toEqual(false);
});
