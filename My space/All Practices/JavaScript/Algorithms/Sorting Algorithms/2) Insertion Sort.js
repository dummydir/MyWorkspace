function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i]
		let j = i - 1
		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j]
			j = j - 1
		}
		arr[j + 1] = numberToInsert
	}
}

// Big-O = O(n^2) quadratic time complexity

const arr = [8, 6, -2, -6, 20]
insertionSort(arr)
console.log(arr)
