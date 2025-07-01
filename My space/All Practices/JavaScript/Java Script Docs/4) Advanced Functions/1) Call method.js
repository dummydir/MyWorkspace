function add(x, y) {
	return x + y
}

// console.log(add instanceof Function) /* true */

let result = add.call(10, 20)
/* by default the "this" in the method refers to global object  */
// console.log(result)

/* that in the strict mode, the this inside the function is set to undefined instead of the global object. */

var greeting = "Hi"

var messenger = {
	greeting: "Hello",
}

function say(name) {
	console.log(this.greeting + " " + name)
}

say.call(this, "john")
