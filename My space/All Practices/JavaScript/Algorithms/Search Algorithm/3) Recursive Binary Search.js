function recursiveBinarySearch(arr, target) {
	return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) {
		return -1
	}
	let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
	if (target === arr[middleIndex]) {
		return middleIndex
	}
	if (target < arr[middleIndex]) {
		return search(arr, target, leftIndex, middleIndex - 1)
	} else {
		return search(arr, target, middleIndex + 1, rightIndex)
	}
}

// Big-O = O(log^n) input size reduced by half

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))

/* 
recursiveBinarySearch(arr, 12)

This calls the recursiveBinarySearch function with the array arr and the target value 12.
Inside recursiveBinarySearch

return search(arr, target, 0, arr.length - 1)

This calls the search function with the array arr, target value 12, leftIndex as 0, and rightIndex as 9.
Inside search Function
First Recursive Call

    leftIndex: 0
    rightIndex: 9
    middleIndex: Math.floor((0 + 9) / 2) = 4
    arr[middleIndex]: 10

Since 12 > 10, we call search(arr, 12, 5, 9) recursively.
Second Recursive Call

    leftIndex: 5
    rightIndex: 9
    middleIndex: Math.floor((5 + 9) / 2) = 7
    arr[middleIndex]: 16

Since 12 < 16, we call search(arr, 12, 5, 6) recursively.
Third Recursive Call

    leftIndex: 5
    rightIndex: 6
    middleIndex: Math.floor((5 + 6) / 2) = 5
    arr[middleIndex]: 12

We found 12 at middleIndex, so we return middleIndex, which is 5.
Final Result

The recursiveBinarySearch function returns 5, which is the index of the target value 12 in the array arr.
Summary

    recursiveBinarySearch is the initial function call that sets up the initial leftIndex and rightIndex.
    search is a helper function that performs the actual binary search using recursion.
    If leftIndex becomes greater than rightIndex, the function returns -1.
    Otherwise, it calculates middleIndex and compares target with arr[middleIndex].
    Based on the comparison, it calls itself recursively with updated leftIndex and rightIndex.
    Returns the index of target or -1 if target is not found.
*/
