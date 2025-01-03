import { Stack } from "../stack";

test("Stack Algo", () => {
  const stack = new Stack<number>();

  stack.push(5);
  stack.push(7);
  stack.push(9);

  expect(stack.pop()).toEqual(9);
  expect(stack.length).toEqual(2);

  stack.push(11);
  expect(stack.pop()).toEqual(11);
  expect(stack.pop()).toEqual(7);
  expect(stack.peak()).toEqual(5);
  expect(stack.pop()).toEqual(5);
  expect(stack.pop()).toEqual(undefined);

  stack.push(69);
  expect(stack.peak()).toEqual(69);
  expect(stack.length).toEqual(1);
});
