// the fibonacci sequence is a sequence in which each number
// is the sum of the two preceding ones

/* 
The first 2 numbers in the sequence are 0 and 1

fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1] the third no is sum of first 2 numbers
fibonacci(4) = [0,1,1,2] the fourth no is sum of 2,3 numbers
fibonacci(5) = [0,1,1,2,3] .....
*/

function fibonacci(n) {
	const fib = [0, 1]
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2]
	}
	return fib
}

console.log(fibonacci(3))

// Big-O = O(n)

/* So, when the loop is iterating:

    In the first iteration (i = 2), fib[2] = fib[1] + fib[0].
        fib[1] is 1 (the second Fibonacci number). in the declared array fib
        fib[0] is 0 (the first Fibonacci number).
        Therefore, fib[2] = 1 + 0 = 1.
		output (0,1,1)

    In the second iteration (i = 3), fib[3] = fib[2] + fib[1].
        fib[2] is 1.
        fib[1] is 1.
        Therefore, fib[3] = 1 + 1 = 2.
		output(0,1,1,2)

    In the third iteration (i = 4), fib[4] = fib[3] + fib[2].
        fib[3] is 2.
        fib[2] is 1.
        Therefore, fib[4] = 2 + 1 = 3. */
