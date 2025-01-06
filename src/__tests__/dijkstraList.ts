import { dijkstraList } from "../dijkstraList";
import { list1 } from "./graphs";

test("dijkstra via adj list", () => {
  /// waht?
  // what..
  // what...
  expect(dijkstraList(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
});
