/* Promises */

// function getUsers() {
// 	return [
// 		{username: "john", email: "john@test.com"},
// 		{username: "jane", email: "jane@test.com"},
// 	]
// }

// function findUsers(username) {
// 	const users = getUsers() /* line A */
// 	const user = users.find((user) => user.username === username)
// 	/* line B */
// 	return user
// }

// console.log(findUsers("jhon"))

/* Because the getUsers() returns an empty array, the users array is empty (line A). When calling the find() method on the users array, the method returns undefined (line B) */

function getUsers(callback) {
	setTimeout(() => {
		callback([
			{username: "john", email: "john@test.com"},
			{username: "jane", email: "jane@test.com"},
		])
	}, 1000)
}

function findUsers(username, callback) {
	getUsers((users) => {
		const user = users.find((user) => user.username === username)
		callback(user)
	})
}

/* to create a promise */

const promise = new Promise((resolve, reject) => {
	if (success) {
		resolve(value)
	} else {
		reject(error)
	}
})
