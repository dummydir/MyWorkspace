function binaryRecursion(arr, target) {
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

// let arrr = [1, 3, 54, 76, 9, 53, 85, 22, 75]
console.log(binaryRecursion([1, 7, 98, 90, 32, 22], 22))
