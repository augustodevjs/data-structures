### Static Arrays

- A static array has a fixed size that is determined at the time of declaration.
- Once created, the size of a static array cannot be changed during runtime.
- Memory for static arrays is allocated at compile-time, and it is limited to the specified size.
- Static arrays have a constant time (O(1)) access time to any element since the elements are stored in contiguous memory locations.

### Dynamic Arrays

- A dynamic array can grow or shrink in size during runtime.
- It allocates memory for a smaller size initially and resizes itself dynamically when elements are added or removed.
- When the dynamic array reaches its capacity, it creates a new larger array and copies the elements from the old array to the new one. This process is called resizing or dynamic resizing.
- Dynamic arrays provide better flexibility and are useful when the exact size of the collection is unknown.
