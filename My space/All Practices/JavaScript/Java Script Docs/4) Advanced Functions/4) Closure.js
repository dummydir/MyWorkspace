function greeting() {
	let msg = "HI"
	function say() {
		console.log("hello", msg)
	}
	return say
}
// greeting()

let hi = greeting()
hi()

/* Now, instead of executing the sayHi() function inside the greeting() function, the greeting() function returns the sayHi() function object.

Note that functions are the first-class citizens in JavaScript, therefore, you can return a function from another function.

Outside of the greeting() function, we assigned the hi variable the value returned by the greeting() function, which is a reference to the sayHi() function.

Then we executed the sayHi() function using the reference of that function: hi(). If you run the code, you will get the same effect as the one above.

However, the interesting point here is that, typically, a local variable only exists during the function’s execution.

It means that when the greeting() function has completed executing, the message variable is no longer accessible.

In this case, we execute the hi() function that references the sayHi() function, the message variable still exists.

The magic of this is closure. In other words, the sayHi() function is a closure.

A closure is a function that preserves the outer scope in its inner scope. */

function greet(msg) {
	return function (name) {
		return msg + " " + name
	}
}

/* Here Both sayHI and sayBye are closure functions */
let sayHi = greet("Hi")
let sayBye = greet("Bye")

console.log(sayHi("john"))
