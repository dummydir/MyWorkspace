// const myObj = {name: "pavan"}
// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))

// const anotherObj = {
// 	alive: true,
// 	answer: 42,
// 	hobby: ["eat", "sleep", "code"],
// 	beverage: {
// 		morning: "coffee",
// 		afternoon: "iced tea",
// 	},
// 	action: function () {
// 		return `time for ${this.beverage.morning}`
// 	},
// }

// console.log(anotherObj.action())

// const vehicle = {
// 	wheels: 4,
// 	engine: function () {
// 		return "vroom"
// 	},
// }

// const truck = Object.create(vehicle)
// truck.doors = 2
// console.log(truck)

const band = {
	vocals: "Robert Plant",
	guitar: "Jimmy Page",
	bass: "John Paul",
	drums: "Josh",
}

console.log(band.hasOwnProperty("drums"))

for (let job in band) {
	console.log(`on ${job} , ${band[job]}`)
}

// Destructing Objects

const {guitar: myVariable} = band
console.log(myVariable)
