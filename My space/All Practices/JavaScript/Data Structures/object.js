const obj = {
	name: "bruce",
	age: 25,
	sayMyName: function () {
		console.log(this.name)
	},
}

// we can add an element to the object "object.key name = value"
obj.hobby = "football"

// we can also delete an object element
delete obj.hobby

console.log(obj)
// console.log(obj["age"])
obj.sayMyName()

// extra methods
/* Object.keys() .values()  .entries() */

/* This uses bracket notation to access the age property of the obj object. 
Bracket notation is more flexible because it allows you to use expressions or 
variables to dynamically determine the property name at runtime. 
In this case, you're using a string literal "age", but you could also use a variable 
containing a string: */
