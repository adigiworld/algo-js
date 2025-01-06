import { preOrderSearch } from "../BTPreOrder";
import { inOrderSearch } from "../BTInOrder";
import { postOrderSearch } from "../BTPostOrder";
import { tree } from "./trees";

test("Binary Tree In Order Search or Traversals", () => {
  expect(inOrderSearch(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100,]);

});

test("Binary Tree Pre Order Search or Traversals", () => {
  // expect(inOrderSearch(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100,]);
  expect(preOrderSearch(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);

});

test("Binary Tree Post Order Search or Traversals", () => {
  // expect(inOrderSearch(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100,]);
  expect(postOrderSearch(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);

});
