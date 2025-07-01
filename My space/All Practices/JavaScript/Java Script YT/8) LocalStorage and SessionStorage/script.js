// web Storage API and its not part of the DOM

/* this is available to js via the global var : window() */
const myArr = ["eat", "sleep", "code"]

const myObj = {
	name: "pavan",
	hobbies: ["eat", "sleep", "code"],
	logName: function () {
		console.log(this.name)
	},
}

// myObj.logName()

// Session Storage
/* 
this means the data will be stored for the session and as long we are on the website too
and this also return the data as string type if we don't stringify and parse the data after 
doing both we will get the real data type
*/

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObj))
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"))
// console.log(mySessionData)

// localStorage

localStorage.setItem("myLocalStore", JSON.stringify(myArr))
// localStorage.removeItem("myLocalStore")
// localStorage.clear()
// const key = localStorage.key(0)
const length = localStorage.length
const myLocalData = localStorage.getItem("myLocalStore")
// console.log(myLocalData)
console.log(length)
