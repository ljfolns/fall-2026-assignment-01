export class Stack<T> {
  private arr: T[] = [];

  public push(item: T): void {
    this.arr.push(item);
  }

  public pop(): T | undefined {
    return this.arr.pop();
  }

  public peek(): T | undefined {
    return this.arr.at(-1);
  }

  public size(): number {
    return this.arr.length;
  }
}
