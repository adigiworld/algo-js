import { bfs, dfs } from "../graph";
import { list2, matrix2 } from "./graphs";

test("bfs - Graph Matrix", () => {
  expect(bfs(matrix2, 0, 6)).toEqual([0, 1, 4, 5, 6,]);

  expect(bfs(matrix2, 6, 0)).toEqual(null);
});

test("dfs - Graph", () => {
  expect(dfs(list2, 0, 6)).toEqual([0, 1, 4, 5, 6,]);

  expect(dfs(list2, 6, 0)).toEqual(null);
});

