function bubbleSort(arr) {
	let swapped
	do {
		swapped = false
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				swapped = true
			}
		}
	} while (swapped)
}

// Big-o = O(n^2)

const arr = [4, 8, 17, 6, 9]
bubbleSort(arr)
console.log(arr)

/*
Example array: [5, 3, 8, 4, 2]

Initially, the array is: [5, 3, 8, 4, 2]

First iteration:

    swapped = false (initial value)

    for (let i = 0; i < arr.length - 1; i++)

        Compare arr[0] (5) and arr[1] (3): 5 > 3 -> swap
            Array after swap: [3, 5, 8, 4, 2]
            swapped = true

        Compare arr[1] (5) and arr[2] (8): 5 < 8 -> no swap

        Compare arr[2] (8) and arr[3] (4): 8 > 4 -> swap
            Array after swap: [3, 5, 4, 8, 2]
            swapped = true

        Compare arr[3] (8) and arr[4] (2): 8 > 2 -> swap
            Array after swap: [3, 5, 4, 2, 8]
            swapped = true

    End of for loop

Array after first iteration: [3, 5, 4, 2, 8]

swapped = true, so we continue to the next iteration.

Second iteration:

    swapped = false (reset)

    for (let i = 0; i < arr.length - 1; i++)

        Compare arr[0] (3) and arr[1] (5): 3 < 5 -> no swap

        Compare arr[1] (5) and arr[2] (4): 5 > 4 -> swap
            Array after swap: [3, 4, 5, 2, 8]
            swapped = true

        Compare arr[2] (5) and arr[3] (2): 5 > 2 -> swap
            Array after swap: [3, 4, 2, 5, 8]
            swapped = true

        Compare arr[3] (5) and arr[4] (8): 5 < 8 -> no swap

    End of for loop

Array after second iteration: [3, 4, 2, 5, 8]

swapped = true, so we continue to the next iteration.

Third iteration:

    swapped = false (reset)

    for (let i = 0; i < arr.length - 1; i++)

        Compare arr[0] (3) and arr[1] (4): 3 < 4 -> no swap

        Compare arr[1] (4) and arr[2] (2): 4 > 2 -> swap
            Array after swap: [3, 2, 4, 5, 8]
            swapped = true

        Compare arr[2] (4) and arr[3] (5): 4 < 5 -> no swap

        Compare arr[3] (5) and arr[4] (8): 5 < 8 -> no swap

    End of for loop

Array after third iteration: [3, 2, 4, 5, 8]

swapped = true, so we continue to the next iteration.

Fourth iteration:

    swapped = false (reset)

    for (let i = 0; i < arr.length - 1; i++)

        Compare arr[0] (3) and arr[1] (2): 3 > 2 -> swap
            Array after swap: [2, 3, 4, 5, 8]
            swapped = true

        Compare arr[1] (3) and arr[2] (4): 3 < 4 -> no swap

        Compare arr[2] (4) and arr[3] (5): 4 < 5 -> no swap

        Compare arr[3] (5) and arr[4] (8): 5 < 8 -> no swap

    End of for loop

Array after fourth iteration: [2, 3, 4, 5, 8]

swapped = true, so we continue to the next iteration.

Fifth iteration:

    swapped = false (reset)

    for (let i = 0; i < arr.length - 1; i++)
        Compare arr[0] (2) and arr[1] (3): 2 < 3 -> no swap
        Compare arr[1] (3) and arr[2] (4): 3 < 4 -> no swap
        Compare arr[2] (4) and arr[3] (5): 4 < 5 -> no swap
        Compare arr[3] (5) and arr[4] (8): 5 < 8 -> no swap

    End of for loop

Array after fifth iteration: [2, 3, 4, 5, 8]

swapped = false, so we exit the do-while loop.

The final sorted array is: [2, 3, 4, 5, 8]

As you can see, the bubble sort algorithm repeatedly compares adjacent 
elements and swaps them if necessary until the array is sorted. 
The swapped variable helps optimize the algorithm by exiting early 
if no swaps are made in an iteration, indicating that the array is already sorted.
 */
