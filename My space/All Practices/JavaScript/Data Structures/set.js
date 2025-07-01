/* the set constructs optionally accepts array as an argument */
const set = new Set([1, 2, 3])
set.add(4)
set.add(1) /* set will ignore the duplicate values */
set.delete(3)
console.log(set.has(3))
set.clear() /* deletes all elements */

for (let item of set) {
	console.log(item)
}
