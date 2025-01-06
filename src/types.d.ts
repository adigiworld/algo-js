
declare type BinaryNode<T> = {
  value: T,
  left: BinaryNode<T> | null,
  right: BinaryNode<T> | null
}

declare type ListNode<T> = {
  value: T,
  next?: ListNode<T>,
  prev?: ListNode<T>,
}

declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][]; // A number means weight


