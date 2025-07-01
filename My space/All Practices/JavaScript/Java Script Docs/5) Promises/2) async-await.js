/* to handle asynchronous operations, you used the callback functions. However, nesting many callback functions can make your code more difficult to maintain, resulting in a notorious issue known as callback hell. */

/* Suppose that you need to perform three asynchronous operations in the following sequence:

1) Select a user from the database.
2) Get the user’s services from an API.
3) Calculate the service cost based on the services from the server.  */

async function showServicesCost() {
	let user = await getUser(100)
	let services = await getServices(user)
	let cost = await getServicesCost(services)
	console.log(`The Services cost is ${cost}`)
}

showServicesCost()

/* we can catch errors by using try catch methods */
async function showServicesCosts() {
	try {
		let users = await getUser(100)
		let services = await getServices(users)
		let costs = await getServicesCost(services)
		console.log(`The Services cost is ${costs}`)
	} catch (error) {
		console.log(error)
	}
}
