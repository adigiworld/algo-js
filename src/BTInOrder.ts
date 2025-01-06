type BinaryNode<T> = {
  value: T,
  left: BinaryNode<T> | null,
  right: BinaryNode<T> | null
}
export function inOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
// Walk or Traversals
function walk(current: BinaryNode<number> | null, path: number[]): number[] {
  if (!current) { return path; }
  walk(current.left, path);
  path.push(current.value);
  walk(current.right, path);
  return path;
}
