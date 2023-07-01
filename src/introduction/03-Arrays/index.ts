import { DynamicArray, HashTable } from './classes';

// Static array with a fixed size of 5 integers
const staticArray: number[] = [1, 2, 3, 4, 5];

console.log(staticArray[0]); // Output: 1
console.log(staticArray[3]); // Output: 4

// Example usage of DynamicArray
const dynamicArray = new DynamicArray<number>();
dynamicArray.push(1);
dynamicArray.push(2);
dynamicArray.push(3);
console.log(dynamicArray.size()); // Output: 3
console.log(dynamicArray.get(1)); // Output: 2
dynamicArray.pop();
console.log(dynamicArray.size()); // Output: 2

// Usage example:
const myHashTable = new HashTable<number>(10);
myHashTable.set('apple', 5);
myHashTable.set('banana', 10);
console.log(myHashTable.get('apple')); // Output: 5
console.log(myHashTable.get('banana')); // Output: 10
console.log(myHashTable.get('orange')); // Output: undefined
