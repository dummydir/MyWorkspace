/* he optional chaining operator (?.) is like a shortcut for accessing nested properties in a series of objects. Instead of having to check if each step in the chain is empty (null or undefined), you can use the operator ?. to directly access the desired property.

If any part of the chain is empty, the optional chaining operator (?.) will stop right there and give you undefined as a result. It saves you from writing extra checks for each step in the chain. */

function getUser(id) {
	if (id <= 0) {
		return null
	}
	return {
		id: id,
		username: "John Doe",
		profile: {
			avatar: "/avatar.png",
			language: "english",
		},
	}
}

/* To access a property of an object using the optional chaining operator, you use one of the following: 

objectName?.propertyName
objectName?.[expression]
*/

let user1 = getUser()
let avatar = user1?.profile?.avatar
console.log(avatar)

/* Combining with the nullish coalescing operator
If you want to assign a default profile to the user, you can combine the optional chaining operator (?.) with the nullish coalescing operator (??) as follows: */

let defaultProfile = {default: "/default.png", language: "English"}

let user2 = getUser(2)
let profile = user2?.profile ?? defaultProfile
