type BinaryNode<T> = {
  value: T,
  left: BinaryNode<T> | null,
  right: BinaryNode<T> | null
}
export function preOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

// Walk or Traversals
function walk(current: BinaryNode<number> | null, nodeValues: number[]): number[] {
  if (!current) { return nodeValues; }
  // pre
  nodeValues.push(current.value);
  // recurse
  walk(current.left, nodeValues);
  walk(current.right, nodeValues);
  // post
  return nodeValues;
}
