/* ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object*/

let prop = "c"

const rank = {
	a: 1,
	b: 2,
	[prop]: 3,
}

// console.log(rank.c)

let name = "fullName"

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
	get [name]() {
		return `${this.firstName} ${this.lastName}`
	}
}
