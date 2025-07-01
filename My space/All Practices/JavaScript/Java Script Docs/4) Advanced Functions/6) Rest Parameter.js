function sum(...args) {
	let total = 0
	for (const a of args) {
		total += a /* total = 1 4 7 */
	}
	return total
}

console.log(sum(1, 3, 3, 32, 34, 54, 56, 6, 47, 78))
