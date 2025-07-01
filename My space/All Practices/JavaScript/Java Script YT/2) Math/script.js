let playGame = confirm("shall we play rock ,paper, or scissors")

if (playGame) {
	//play
	let playerChoice = prompt("please enter rock ,paper,or scissors")
	if (playerChoice) {
		let playerOne = playerChoice.trim().toLowerCase()
		if (
			playerOne === "rock" ||
			playerOne === "paper" ||
			playerOne === "scissors"
		) {
			let computerChoice = Math.floor(Math.random() * 3 + 1)
			let computer =
				computerChoice === 1
					? "rock"
					: computerChoice === 2
					? "paper"
					: "scissors"
		} else {
			alert("you should choose one")
		}
	} else {
		alert("i guess you are not ready")
	}
} else {
	alert("Ok,maybe next time")
}
