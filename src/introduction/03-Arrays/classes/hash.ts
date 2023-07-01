export class HashTable<T> {
  private readonly data: Array<Array<[string, T]>>;

  constructor(size: number) {
    this.data = new Array(size);
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.data.length;
    }
    return hash;
  }

  public set(key: string, value: T): void {
    const index = this.hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }

  public get(key: string): T | undefined {
    const index = this.hash(key);
    if (!this.data[index]) {
      return undefined;
    }
    const bucket = this.data[index];
    for (const [storedKey, value] of bucket) {
      if (storedKey === key) {
        return value;
      }
    }
    return undefined;
  }
}
