let person1 = {
	firstName: "John",
	lastName: "Doe",
	getFullName() {
		return this.firstName + " " + this.lastName
	},
}

// console.log(person1.getFullName())

let person2 = Object.create(person1)
console.log(person2.firstName)

/* A factory function is a function that returns a new object. The following creates a person object named */

function createPerson() {
	return {
		firstName: "John",
		lastName: "Doe",
		getFullName() {
			return this.firstName + " " + this.lastName
		},
	}
}

/* The Object.create() method
The Object.create() method creates a new object using an existing object as the prototype of the new object:

Object.create(proto, [propertiesObject]) */

var personActions = {
	getFullName() {
		return this.firstName + " " + this.lastName
	},
}

function createPerson(firstName, lastName) {
	let person = Object.create(personActions)
	person.firstName = firstName
	person.lastName = lastName
	return person
}
