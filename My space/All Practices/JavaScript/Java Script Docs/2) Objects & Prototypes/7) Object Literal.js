/* ES6 allows you to eliminate duplication when a property of an object is the same as the local variable name by including the name without a colon and value. */
let name = "Computer",
	status = "On"

let machine = {
	name,
	status,
}

/* In ES6, the computed property name is a part of the object literal syntax, and it uses the square bracket notation.

When a property name is placed inside the square brackets, the JavaScript engine evaluates it as a string. It means that you can use an expression as a property name. */
let prefix = "machine"
let machine1 = {
	[prefix + " name"]: "server",
	[prefix + " hours"]: 10000,
}

console.log(machine1["machine name"]) // server
console.log(machine1["machine hours"]) // 10000
