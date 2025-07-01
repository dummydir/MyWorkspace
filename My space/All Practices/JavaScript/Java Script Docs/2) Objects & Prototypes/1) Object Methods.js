/* An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method. Typically, you use methods to describe the object’s behaviors. */

let person = {
	firstName: "john",
	lastName: "doe",
}

/* For example, the following adds the greet method to the person object: */

person.greet = function () {
	console.log("hello")
}

/* JavaScript allows you to define methods of an object using the object literal syntax as shown in the following example: */

let person = {
	firstName: "John",
	lastName: "Doe",
	greet: function () {
		console.log("Hello, World!")
	},
}

/* ES6 provides you with the concise method syntax that allows you to define a method for an object: */

let person = {
	firstName: "John",
	lastName: "Doe",
	greet() {
		console.log("Hello, World!")
	},
}

person.greet()
