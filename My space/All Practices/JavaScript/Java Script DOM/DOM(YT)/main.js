// DOM = document object model
const view1 = document.getElementById("view1")
// console.log(view1)

const view2 = document.querySelector("#view2")
// console.log(view2)

view1.style.display = "none"
view2.style.display = "flex"
view2.style.flexDirection = "row"
view2.style.flexWrap = "wrap"
// view2.style.margin = "10px"

const views = document.getElementsByClassName("view")
// console.log(views)

const sameViews = document.querySelectorAll(".view")
// console.log(sameViews)

const divs = view1.querySelectorAll("div")
// console.log(divs)

const tagDiv = document.getElementsByTagName("div")
// console.log(tagDiv)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
// console.log(evenDivs)

for (let i = 0; i < evenDivs.length; i++) {
	evenDivs[i].style.backgroundColor = "darkblue"
}

// console.log(evenDivs[0].parentElement.children)
// console.log(evenDivs[0].parentElement.childNodes)
// console.log(evenDivs[0].parentElement.hasChildNodes())

const div1 = document.querySelector(".one")
// console.log(div1.parentElement.remove())

// const createDivs = (parent, iter) => {
// 	console.log(parent)
// 	const newDiv = document.createElement("div")
// 	newDiv.textContent = iter
// 	newDiv.style.backgroundColor = "#000"
// 	newDiv.style.width = "100px"
// 	newDiv.style.height = "100px"
// 	newDiv.style.margin = "10px"
// 	newDiv.style.display = "flex"
// 	newDiv.style.justifyContent = "center"
// 	newDiv.style.alignItems = "center"
// 	parent.append(newDiv)
// }

// // createDivs(view2, 10)
// for (i = 1; i <= 12; i++) {
// 	createDivs(view2, i)
// }

const genDivs = (parent, iter) => {
	console.log(parent)
	const newDiv = document.createElement("div")
	newDiv.textContent = iter
	newDiv.style.backgroundColor = "#000"
	newDiv.style.width = "300px"
	newDiv.style.height = "200px"
	newDiv.style.margin = "15px"
	newDiv.style.display = "flex"
	newDiv.style.justifyContent = "center"
	newDiv.style.alignItems = "center"
	newDiv.style.overflow = "hidden"
	parent.append(newDiv)
}
// genDivs()
for (i = 1; i < 5; i++) {
	genDivs(view2, i)
}
