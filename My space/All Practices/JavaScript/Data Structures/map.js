const map = new Map([
	["a", 1],
	["b", 2],
])
map.set("c", 3) /* to add a key value pair */

for (let [key, value] of map) {
	console.log(`${key} : ${value}`)
}
