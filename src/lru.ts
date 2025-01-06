type Node<T> = {
  value: T,
  next: Node<T> | undefined,
  previous: Node<T> | undefined,
}
function createNode<V>(value: V): Node<V> {
  // return value as Node<V>;
  return { value } as Node<V>;
}

export class LRU<K, V> {
  private length: number;
  private head?: Node<V>;
  private tail: Node<V> | undefined;

  private lookup: Map<K, Node<V>>;
  private reverseLookup: Map<Node<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, Node<V>>();
    this.reverseLookup = new Map<Node<V>, K>();
  }
  update(key: K, value: V): void {
    let node = this.lookup.get(key);
    if (!node) {
      node = createNode(value);
      this.length += 1;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }
  get(key: K): V | undefined {
    const node = this.lookup.get(key);
    if (!node) { return undefined; }
    this.detach(node);
    this.prepend(node);
    return node.value;
  }

  private detach(node: Node<V>) {
    if (node.previous) { node.previous.next = node.next }
    if (node.next) { node.next.previous = node.previous }
    // if(this.length===1){this.head=this.tail=undefined;}
    if (this.head === node) { this.head = this.head.next; }
    if (this.tail === node) { this.tail = this.tail.previous; }
    node.next = undefined;
    node.previous = undefined;
  }
  private prepend(node: Node<V>) {
    if (!this.head) { this.head = this.tail = node; return; }
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }
  private trimCache(): void {
    if (this.length <= this.capacity) { return; }
    const tail = this.tail as Node<V>;
    this.detach(this.tail as Node<V>);
    const key = this.reverseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length -= 1;
  }
}


//
