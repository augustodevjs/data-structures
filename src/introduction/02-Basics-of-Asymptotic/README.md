# Basic of Asymptotic Analysis

### Efficiency

- Efficiency of data structures is always measured in terms of time and space.
- An ideal data structure could be the one that takes the least possible time for all its operations and consumes the least memory
- Our focus will be on finding the TIME COMPLEXITY

### Finding F(N)

- We can compare two data structures for a particular operation by comparing their f(n) values.
- We are interested in growth rate of f(n) with respect to n because it might be possible that for smaller input size, one data structure may seem better than the other for largefr input size it may not.
- This concept is applicable in comparing the two data structures as well.
- This approximate measure of time complexity is called Asymptotic Complexity

<hr>

## Big O

- Big O Notation is used to measure the performance of any algorithm by providing the order of growth of the function.
- It gives the upper bound on a function by which we can make sure that the fucntion will never grow faster than this upper bound.
- Big O Notation will give us the approximate run time.

### Formal Definition:

- if F(N) and G(N) are two functions, then F(N) = O(G(n)) if there exist constants c and n0 such that f(n) <= c \* g(n) for all n >= n0. This simply means that f(n) does not gro
- Note: f(n) = O(g(n)) means that f(n) does not grow faster tha g(n). Therefore, Big O Notation help us calculate the worst-case time complexity of an algorithm. How worst a particular algorithm can perform.

### Examples

<hr>
Ex1: Consider the functions f(n) = n and g(n) = 2n. Is f(n) = O(g(n))?

According to the definition, f(n) = O(g(n)) if there exists a value c and n₀ such that f(n) ≤ c \* g(n) for all n ≥ n₀. Substituting f(n) = n and g(n) = 2n into the equation:

n ≤ c \* 2n

So, this condition is satisfied for c = 1 and n₀ = 1.

Therefore, f(n) = O(g(n)) and the function f(n) grows linearly.

<hr>

Ex2: Consider the functions f(n) = 4n + 3 and g(n) = n. Find if f(n) = O(g(n))?

According to the definition, f(n) = O(g(n)) if there exists a value c and n₀ such that f(n) ≤ c \* g(n) for all n ≥ n₀.

It can be observed that 4n + 3 is not ≤ c _ n. To determine whether they are asymptotically equal or not, there should be some value of c such that 4n + 3 ≤ c _ n.

For c = 5:

4n + 3 ≤ 5n

3 ≤ 5 - 4n

n ≥ 3

Therefore, f(n) ≤ c \* g(n) for all n ≥ 3, where c = 5 and n₀ = 3.

Hence, f(n) = O(g(n)) and the growth rate of function f(n) is linear.
