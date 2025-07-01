function linearSearch(arr, target) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === target) {
			return i
		}
	}
	return -1
}

// let arr = [1, 2, 3, 45, 5, 4]
// console.log(linearSearch(arr, 45))

const largeArray = Array.from({length: 10000000}, (_, i) => i + 1)

// Example of a target to search for
const target = 5000000 // You can change this to any number from 1 to 1,000,000

console.log(linearSearch(largeArray, target))
