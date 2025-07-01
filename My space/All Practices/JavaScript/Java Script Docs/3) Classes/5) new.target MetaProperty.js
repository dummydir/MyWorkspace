/*ES6 provides a meta property named "new.target" that allows you to detect whether a function or constructor was called using the new operator*/

/* In a regular function call, the new.target returns undefined. If the function was called with the new operator, the new.target returns a reference to the function. */

// Suppose you don’t want the Person to be called as a function, you can use the new.target
function Person(name) {
	if (!new.target) {
		throw "must use new operator with Person"
	}
	this.name = name
}

/* Now, the only way to use Person is to instantiate an object from it by using the new operator. If you try to invoke it like a regular function, you will encounter an error */

/* In a class constructor, the new.target refers to the constructor that was invoked directly by the new operator. It is true if the constructor is in the parent class and was delegated from the constructor of the child class */
class Person {
	constructor(name) {
		this.name = name
		console.log(new.target.name)
	}
}

class Employee extends Person {
	constructor(name, title) {
		super(name)
		this.title = title
	}
}

let john = new Person("John Doe") // Person
let lily = new Employee("Lily Bush", "Programmer") // Employee
