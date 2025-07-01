function isPrime(n) {
	if (n < 2) {
		return false
	}
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false
		}
	}
	return true
}

console.log(isPrime(4))
console.log(isPrime(6))
console.log(isPrime(7))
/* the number is only divisible by itself is prime number */
console.log(isPrime(13))

// big-O = O(n) linear time complexity
