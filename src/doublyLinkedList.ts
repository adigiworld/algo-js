type Node<T> = {
  value: T,
  previous: Node<T> | undefined,
  next: Node<T> | undefined,
}
export class DoublyLinkedList<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }
  append(item: T): void {
    const node = { value: item } as Node<T>;
    this.length += 1;
    if (!this.tail) { this.head = this.tail = node; return; }
    node.previous = this.tail;
    // node.next = undefined;
    this.tail.next = node;
    this.tail = node;
  }
  prepend(item: T): void {
    const node = { value: item } as Node<T>;
    this.length += 1;
    if (!this.head) { this.head = this.tail = node; return; }
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("Out of index");
    } else if (idx === this.length) {
      this.append(item);
      return
    } else if (idx === 0) {
      this.prepend(item);
      return
    }
    this.length += 1;
    let curr = this.head;
    for (let i = 0; i < idx; i += 1) {
      curr = curr?.next;
    }
    curr = curr as Node<T>;
    const node = { value: item } as Node<T>;
    node.previous = curr.previous;
    node.next = curr
    // curr?.previous=node;
    if (curr.previous) {
      curr.previous.next = node;
    }
  }
  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; i < this.length && curr; i += 1) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }
    if (!curr) { return; }
    return this.removeNode(curr);
  }
  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (!node) {
      return undefined;
    }
    return this.removeNode(node);
  }
  get(idx: number): T | undefined {
    const node = this.getAt(idx);
    return node?.value;
    // let current = this.head;
    // for (let i = 0; i < idx; i += 1) {
    //   current = current?.next;
    // }
    // return current?.value;
  }

  private removeNode(node: Node<T>): T | undefined {
    this.length -= 1;
    if (this.length === 0) {
      this.head = this.tail = undefined;
      return node.value;
    }
    if (node.previous) {
      node.previous.next = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    }
    if (node === this.head) { this.head = node.next; }
    if (node === this.tail) { this.tail = node.previous }
    node.previous = node.next = undefined;
    return node.value;
  }

  private getAt(idx: number): Node<T> | undefined {
    let current = this.head;
    for (let i = 0; i < idx; i += 1) {
      current = current?.next;
    }
    return current;
  }
}
