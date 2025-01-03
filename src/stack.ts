type Node<T> = {
  value: T,
  previous: Node<T> | undefined,
}

export class Stack<T> {
  public length: number;
  private head: Node<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }
  push(item: T): void {
    const node = { value: item } as Node<T>;
    this.length += 1;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.previous = this.head;
    this.head = node;
  }
  pop(): T | undefined {
    if (this.length === 0) { return undefined }
    const head = this.head as Node<T>;
    this.head = head.previous;
    this.length -= 1;
    head.previous = undefined;
    return head.value;
  }
  peak(): T | undefined {
    return this.head?.value;
  }
}
