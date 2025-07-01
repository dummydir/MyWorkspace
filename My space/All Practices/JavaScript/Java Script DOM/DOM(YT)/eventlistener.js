// JavaScript Event Listeners

// const view = document.querySelector("#view1")
// const div = view.querySelector("div")
// const h2 = document.querySelector("h2")
// console.log(view)

// Syntax : addEventListener(event,function,useCapture)

const doSomething = () => {
	alert("doing something")
}

// h2.addEventListener("click", doSomething, false)
// h2.removeEventListener("click", doSomething)

/* we cannot remove an eventListener for an anonymous */

// h2.addEventListener("click", (e) => {
// 	console.log(e.target)
// 	e.target.textContent = "clicked"
// })

/* This is used to let us know DOM is fully loaded and we can interact with it */
document.addEventListener("readystatechange", (e) => {
	if (e.target.readyState === "complete") {
		console.log("readyState : complete")
		initApp()
	}
})

/* EVENT BUBBLING */

// stopPropagation() overrides the default eventBubbling only acts
// on the element we click and not its parent

// const initApp = () => {
// 	const view = document.querySelector("#view1")
// 	const div = view.querySelector("div")
// 	const h2 = document.querySelector("#heading-2")

// 	view.addEventListener(
// 		"click",
// 		(e) => {
// 			e.target.style.backgroundColor = "purple"
// 		},
// 		false
// 	)
// 	div.addEventListener(
// 		"click",
// 		(e) => {
// 			// e.stopPropagation()
// 			e.target.style.backgroundColor = "blue"
// 		},
// 		false
// 	)
// 	h2.addEventListener("click", (e) => {
// 		e.target.textContent = "Clicked"
// 	})
// 	false
// }

/* ClassList , Add ,Remove and Toggle */
const initApp = () => {
	const view = document.querySelector("#view1")
	const divs = document.querySelectorAll(".view1")
	const h2 = document.querySelector("#heading-2")

	view.addEventListener(
		"click",
		(e) => {
			view.classList.add("blue")
			// view.classList.remove("d3d3d3")
		},
		false
	)
	divs.addEventListener(
		"click",
		(e) => {
			// e.stopPropagation()
			divs.classList.add("purple")
			// div.classList.remove("#000")
			// div.style.backgroundColor = "blue"
		},
		false
	)
	h2.addEventListener("click", (e) => {
		// e.target.textContent = "Clicked"
		h2.classList.toggle("blue")
		// h2.classList.toggle("purple")
	})
	false
}

const nav = document.querySelector("nav")
nav.addEventListener("mouseover", (e) => {
	e.target.classList.toggle("height100")
})
