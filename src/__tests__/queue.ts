import { Queue } from "../queue";

test("Queue or Line Algo", () => {
  const queue = new Queue<number>();

  queue.enqueue(5);
  queue.enqueue(7);
  queue.enqueue(9);

  expect(queue.dequeue()).toEqual(5);
  expect(queue.length).toEqual(2);
  queue.enqueue(11);
  expect(queue.dequeue()).toEqual(7);
  expect(queue.dequeue()).toEqual(9);
  expect(queue.peak()).toEqual(11);
  expect(queue.dequeue()).toEqual(11);
  expect(queue.dequeue()).toEqual(undefined);
  expect(queue.length).toEqual(0);

  queue.enqueue(69);
  expect(queue.peak()).toEqual(69);
  expect(queue.length).toEqual(1);
});
