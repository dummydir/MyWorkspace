function factorial(n) {
	let result = 1
	for (i = 2; i <= n; i++) {
		result = result * i
	}
	return result
}

console.log(factorial(4))
console.log(factorial(5))

// Big -O = O(n) linear time complexity
