class Person {
	constructor(name) {
		this.name = name
		/* this.name within the constructor method ensures that each instance of the Person class can have its own name property with the value specified when the instance is created. */
	}
}

// let person = new Person("John")
// console.log(person.name)

/* ES6 getters and setters */
class People {
	constructor(name) {
		this._name = name
	}
	get name() {
		return this._name
	}
	set name(newName) {
		newName = newName.trim()
		if (newName === "") {
			throw "name cannot be empty"
		}
		this._name = newName
	}
}

let people = new People("john Doe")
// console.log(people.name)
people.name = "jane smith"
// console.log(people.name)
