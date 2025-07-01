// JSON : JavaScript Object Notation

/* 
JSON is used to send data and receive data 
JSON is a text format that is completely language independent
Meaning JSON is used to send and receive data in many languages
... not just in javaScript
 */

const myObj = {
	name: "pavan",
	hobbies: ["eat", "sleep", "code"],
	hello: function () {
		console.log("hello")
	},
}

console.log(myObj)
console.log(myObj.name)
myObj.hello()

const sendJSON = JSON.stringify(myObj)
console.log(sendJSON)
/* here hello wont be visible bcoz JSON doesn't send functions  */
console.log(typeof sendJSON)

const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)
