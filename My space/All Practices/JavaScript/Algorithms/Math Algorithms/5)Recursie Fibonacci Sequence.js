function recursiveFibonacci(n) {
	if (n < 2) {
		return n
	}
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(4))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(8))

// Big-O = O(n) iterative
// O(2^n) - Recursive

/* recursiveFibonacci(4):

    recursiveFibonacci(4) calls recursiveFibonacci(3) and recursiveFibonacci(2).
    recursiveFibonacci(3) calls recursiveFibonacci(2) and recursiveFibonacci(1).
    recursiveFibonacci(2) returns 1.
    recursiveFibonacci(1) returns 1.
    recursiveFibonacci(3) sums these up: 1 + 1 = 2.
    recursiveFibonacci(4) then sums recursiveFibonacci(3) and recursiveFibonacci(2): 2 + 1 = 3.

So, recursiveFibonacci(4) returns 3 */
