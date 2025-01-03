type Node<T> = {
  value: T,
  next: Node<T> | undefined,
}

export class Queue<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }
  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length += 1;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;

  }
  dequeue(): T | undefined {
    if (!this.head) { return undefined; }
    this.length -= 1;
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }
  peak(): T | undefined {
    return this.tail?.value;
  }
}
