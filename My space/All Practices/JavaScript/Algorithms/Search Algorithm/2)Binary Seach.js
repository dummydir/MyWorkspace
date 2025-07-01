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

// Big-O = O(log^n) bcoz input size reduced by half

console.log(binarySearch([-5, 3, 4, 6, 10], 10))
console.log(binarySearch([-5, 3, 4, 6, 10], 6))

/* 
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

we want to find the index of the target value 12

First Iteration
let leftIndex = 0;          // Initialized to 0
let rightIndex = arr.length - 1;  // Initialized to 9 (length of arr - 1)

    leftIndex: 0
    rightIndex: 9
    middleIndex: Math.floor((0 + 9) / 2) = 4
    arr[middleIndex]: 10

Since 12 > 10, we update leftIndex to middleIndex + 1, which becomes 5.
Second Iteration

    leftIndex: 5
    rightIndex: 9
    middleIndex: Math.floor((5 + 9) / 2) = 7
    arr[middleIndex]: 16

Since 12 < 16, we update rightIndex to middleIndex - 1, which becomes 6.
Third Iteration

    leftIndex: 5
    rightIndex: 6
    middleIndex: Math.floor((5 + 6) / 2) = 5
    arr[middleIndex]: 12

We found 12 at middleIndex, so we return middleIndex, which is 5.
Final Result

The binarySearch function returns 5, which is the index of the target value 12 in the array arr.
Summary

    Start with leftIndex = 0 and rightIndex = arr.length - 1.
    Calculate middleIndex as the average of leftIndex and rightIndex.
    Compare target with arr[middleIndex].
    Update leftIndex or rightIndex based on the comparison.
    Repeat until leftIndex is greater than rightIndex or target is found.
    Return the index of target or -1 if target is not found.
 */
