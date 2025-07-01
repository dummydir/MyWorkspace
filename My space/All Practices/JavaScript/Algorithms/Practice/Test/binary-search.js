function binarySearch(arr, target) {
	let leftIndex = 0
	let rightIndex = arr.length - 1
	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
		if (target === arr[middleIndex]) {
			return middleIndex
		}
		if (target < arr[middleIndex]) {
			rightIndex = middleIndex - 1
		} else {
			leftIndex = middleIndex + 1
		}
	}
	return -1
}

const largeArray = Array.from({length: 10000000}, (_, i) => i + 1)

// Example of a target to search for
const target = 5000000 // You can change this to any number from 1 to 1,000,000

console.log(binarySearch(largeArray, target))

/* 
    Array.from():
        This is a static method that creates a new array from an array-like or iterable object. It can take two arguments:
            The first argument is an object with a length property (defining how many elements the new array should have).
            The second argument is a mapping function that can be applied to each element of the new array.

    { length: 1000000 }:
        This object defines the size of the new array. Here, it specifies that the new array should have 1,000,000 elements.

    (_, i) => i + 1:
        This is a callback function (a mapping function) that is applied to each element of the array. It takes two parameters:
            The first parameter is usually the current element's value, but it’s unused here (denoted by _, a common convention for unused variables).
            The second parameter i represents the index of the current element (ranging from 0 to 999,999).
        The function returns i + 1, so for each index i, it generates the corresponding integer starting from 1 (i.e., for index 0, it returns 1; for index 1, it returns 2; and so on).

Final Result

The final result is an array of integers from 1 to 1,000,000. Here's a simplified view of what happens:

    For index 0, it generates 1 (0 + 1).
    For index 1, it generates 2 (1 + 1).
    For index 2, it generates 3 (2 + 1).
    ...
    For index 999999, it generates 1000000 (999999 + 1).
*/
