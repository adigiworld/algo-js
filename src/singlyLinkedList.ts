type Node<T> = {
  value: T,
  next: Node<T> | undefined,
}
export class SinglyLinkedList<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }
  append(item: T): void {
    const node = { value: item } as Node<T>;
    this.length += 1;
    if (!this.tail) { this.head = this.tail = node; return; }
    this.tail.next = node;
    this.tail = node;
  }
  prepend(item: T): void {
    const node = { value: item } as Node<T>;
    this.length += 1;
    if (!this.head) { this.head = this.tail = node; return; }
    node.next = this.head;
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
    const prev = this.getAt(idx - 1);
    const node = { value: item } as Node<T>;
    if (prev?.next) {
      node.next = prev.next;
      prev.next = node;
    }
    if (prev) {
      prev.next = node;
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
    if (idx > this.length || idx < 0) {
      throw new Error("Out of index");
    }
    const curr = this.getAt(idx);
    return curr?.value;
  }

  private getAt(idx: number): Node<T> | undefined {
    let current = this.head;
    for (let i = 0; i < idx; i += 1) {
      current = current?.next;
    }
    return current;
  }
  private getIdx(node: Node<T>): number {
    let idx = 0;
    let curr = this.head;
    for (idx; idx < this.length; idx += 1) {
      if (node.value === curr?.value) {
        break;
      }
      curr = curr?.next;
    }
    return idx;
  }
  private removeNode(node: Node<T>): T | undefined {
    this.length -= 1;
    if (this.length === 0) {
      this.head = this.tail = undefined;
      return node.value;
    }
    if (node === this.head && node.next) {
      this.head = node.next;
      return node.value;
    }
    if (node.next) {
      const idx = this.getIdx(node);
      const prev = this.getAt(idx - 1);
      if (prev?.next) {
        prev.next = node.next;
      }
      return node.value;
    }
    if (node === this.tail && this.length > 0) {
      const idx = this.getIdx(node);
      const prev = this.getAt(idx - 1);
      if (prev?.next) {
        prev.next = undefined;
        this.tail = prev;
      }
      return node.value;
    }
    node.next = undefined;
    return node.value;
  }

}
