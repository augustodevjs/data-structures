export class DynamicArray<T> {
  private data: T[];
  private capacity: number;
  private length: number;

  constructor() {
    this.data = [];
    this.capacity = 1; // Initial capacity
    this.length = 0; // Number of elements in the array
  }

  // Resize the array to the given capacity
  private resize(newCapacity: number): void {
    const newData: T[] = new Array(newCapacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
    this.capacity = newCapacity;
  }

  // Add an element to the end of the dynamic array
  public push(item: T): void {
    if (this.length === this.capacity) {
      this.resize(this.capacity * 2); // Double the capacity when full
    }
    this.data[this.length] = item;
    this.length++;
  }

  // Remove the last element from the dynamic array
  public pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const lastItem = this.data[this.length - 1];

    this.length--;

    if (this.length <= this.capacity / 4) {
      this.resize(this.capacity / 2); // Halve the capacity when it's 1/4 full
    }

    return lastItem;
  }

  // Get the current size of the dynamic array
  public size(): number {
    return this.length;
  }

  // Access an element at a specific index
  public get(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }
}
