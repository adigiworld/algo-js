function search(current: BinaryNode<number> | null, needle: number) {
  // if (!current) { return false; }
  // if (current.value===needle) { return true; }
  // if (current.value < needle) {
  //  return search(current.right, needle);
  // }
  // if (current.value > needle) {
  //  return search(current.left, needle);
  // }
  // return false;
}

export function dfsOnBST(head: BinaryNode<number> | null, needle: number): boolean {
  if (!head) { return false; }
  if (head.value === needle) { return true; }
  if (head.value < needle) {
    return dfsOnBST(head.right, needle);
  }
  if (head.value > needle) {
    return dfsOnBST(head.left, needle);
  }
  return false;
}
