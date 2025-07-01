/* The apply() method is similar to the call() method except that it takes the arguments of the function as an array instead of the individual arguments. */
// apply borrows the function

// const Person = {
// 	firstName: "john",
// 	lastName: "Doe",
// }

// function greet(greeting, msg) {
// 	return `${greeting} ${this.firstName} ${msg}`
// }

// let res = greet.apply(Person, ["hello", "how are you"])
// console.log(res)

const People = {
	firstName: "john",
	lastName: "Doe",
}

const greet = (greeting, msg) => {
	return `${greeting} ${this.firstName} ${msg}`
}

let res = greet.apply(People, ["heelo", "how r u?"])
console.log(res)
