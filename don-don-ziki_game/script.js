window.addEventListener("DOMContentLoaded", () => {

const choices = document.querySelectorAll(".choice"),
	score = document.querySelector("#score"),
	restart = document.querySelector("#restart"),
	modal = document.querySelector(".modal"),
	result = document.querySelector("#result"),
	scoreObj = {
		player: 0,
		draw: 0,
		computer: 0
	};


// PLAY
function play(event) {
	restart.style.display = "inline-block";
	const playerChoose = event.target.id,
	computerChoose = getComputerChoice(),
	winner = getWinner(playerChoose,computerChoose);
	showWinner(winner,computerChoose);
}

// GET COMPUTER CHOOSE
function getComputerChoice() {
	const random = Math.random();

	if (random <= 0.32) {
		return "rock";
	} else if (random <= 0.62) {
		return "paper";
	} else {
		return "scissors";
	}
}


// GET WINNER
function getWinner(p,c) {
	if (p === c) {
		return "draw";
	} else if (p === "rock") {
		if (c === "paper") {
			return "computer";
		} else {
			return "player";
		}
	} else if (p === "paper") {
		if (c === "scissors") {
			return "computer";
		} else {
			return "player";
		}
	}  else if (p === "scissors") {
		if (c === "rock") {
			return "computer";
		} else {
			return "player";
		}
	}
}


// SHOW WINNER
function showWinner(winner,computer) {
	if (winner === "computer") {
		scoreObj.computer++;

		result.innerHTML = `
			<h1 class="text-lose">You LOSE!</h1>
			<i class="choice fas fa-hand-${computer}"></i>
			<p>Computer choose <strong>${computer}</strong></p>
		`;
	} else if (winner === "player") {
		scoreObj.player++;

		result.innerHTML = `
			<h1 class="text-win">You WIN!</h1>
			<i class="choice fas fa-hand-${computer}"></i>
			<p>Computer choose <strong>${computer}</strong></p>
		`;
	} else {
		scoreObj.draw++;

		result.innerHTML = `
			<h1>It's DRAW!</h1>
			<i class="choice fas fa-hand-${computer}"></i>
			<p>Computer choose <strong>${computer}</strong></p>
		`;
	}

	score.innerHTML = `
		<p>Player: ${scoreObj.player}</p>
        <p>Draw: ${scoreObj.draw}</p>
        <p>Computer: ${scoreObj.computer}</p>
	`;

	modal.style.display = "block";
}


// RESTART GAME
function restartGame() {
	scoreObj.player = 0;
	scoreObj.computer = 0;
	scoreObj.draw = 0;
	
	score.innerHTML = `
		<p>Player: ${scoreObj.player}</p>
        <p>Draw: ${scoreObj.draw}</p>
        <p>Computer: ${scoreObj.computer}</p>
	`

	restart.style.display = "none";
}


// CLOSE MODAL
function closeModal(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// EVENTS
choices.forEach(choice => choice.addEventListener("click",play));

restart.addEventListener("click", restartGame);

window.addEventListener("click", closeModal);


});

