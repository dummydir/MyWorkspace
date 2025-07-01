"use strict"

// const variable = "pavan"
// console.log(variable)

// Object.create()

class customError {
	constructor(msg) {
		this.msg = msg
		this.name = "custom error"
		this.stack = `${this.name} : ${this.message}`
	}
}

const makeError = () => {
	try {
		throw new Error("this is a custom error")
	} catch (err) {
		console.error(err.stack)
		// logTheError(err.stack)
	}
}

makeError()
