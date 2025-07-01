// logic is n! = n * (n-1)!

function recursiveFactorial(n) {
	if (n === 0) {
		return 1
	}
	return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(4))

// Big-O = O(n)

/*     recursiveFactorial(4):
        Since n is not 0, the function returns 4 * recursiveFactorial(3).

    recursiveFactorial(3):
        Since n is not 0, the function returns 3 * recursiveFactorial(2).

    recursiveFactorial(2):
        Since n is not 0, the function returns 2 * recursiveFactorial(1).

    recursiveFactorial(1):
        Since n is not 0, the function returns 1 * recursiveFactorial(0).

    recursiveFactorial(0):
        Here, n is 0, so the function returns 1 directly.

Now, let's substitute these values back up the chain:

    recursiveFactorial(1) returns 1 * 1 = 1.
    recursiveFactorial(2) returns 2 * 1 = 2.
    recursiveFactorial(3) returns 3 * 2 = 6.
    recursiveFactorial(4) returns 4 * 6 = 24.

So, recursiveFactorial(4) indeed returns 24 */
