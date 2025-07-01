function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i
		}
	}
	return -1
}

console.log(linearSearch([1, 3, 5, 7, 8, 4], 5))

// Big-O = O(n) linear complexity

// i = 2
// arr[2] === 5
// output is 2
