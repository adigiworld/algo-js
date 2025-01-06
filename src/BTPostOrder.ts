type BinaryNode<T> = {
  value: T,
  left: BinaryNode<T> | null,
  right: BinaryNode<T> | null
}
export function postOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

// Walk or Traversals
function walk(current: BinaryNode<number> | null, path: number[]): number[] {
  if (!current) { return path; }
  // pre
  // recurse
  walk(current.left, path);
  walk(current.right, path);
  path.push(current.value);
  // post
  return path;
}
