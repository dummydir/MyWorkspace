/* Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument. */

let person = {
	firstName: "John Doe",
	getName: function () {
		console.log(this.name)
	},
}
/* The this inside the setTimeout() function is set to the global object in non-strict mode and undefined in the strict mode.

Therefore, when the callback person.getName is invoked, the name does not exist in the global object, it is set to undefined */

// setTimeout(person.getName, 1000)

let f = person.getName.bind(person)
setTimeout(f, 1000)
