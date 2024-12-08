let winner = "";
let userScore = 0;
let computerScore = 0;

//a closure fuction to add computer's score by commanding computerUp()
const addComputerScore = () => {
  let computerScore = 0;
  return () => ++computerScore;
};
const computerUp = addComputerScore();

//a closure function to add user's score up by userUp()
const addUserScore = () => {
  let userScore = 0;
  return () => ++userScore;
};
const userUp = addUserScore();

function play() {
  games = ["paper", "scissors", "rock"];
  let userPlay = "";
  do {
    alert("please choose one from rock, scissors, and paper?");
    userPlay = prompt("Your play?");
    userPlay = userPlay?.toLowerCase();
    userPlay = userPlay.trim();
  } while (!games.includes(userPlay));

  let computerPlay = games[Math.floor(Math.random() * games.length)];

  console.log(`you played:${userPlay} computer played:${computerPlay}`);
  if (userPlay === computerPlay) {
    console.log("draw");
  } else {
    switch (userPlay) {
      case "paper": {
        computerPlay === "scissors" ? scoreUp("computer") : scoreUp("user");
        break;
      }
      case "scissors": {
        computerPlay === "paper" ? scoreUp("user") : scoreUp("computer");
        break;
      }
      case "rock": {
        computerPlay === "paper" ? scoreUp("computer") : scoreUp("user");
        break;
      }
      default: {
        break;
      }
    }
  }
}

function scoreUp(winner) {
  if (winner === "user") {
    userScore = userUp();
    console.log(`You won,
        computer score: ${computerScore},
        Your score: ${userScore}
        ___________________________`);
    return;
  } else {
    computerScore = computerUp();
    console.log(`You lost,
        computer score: ${computerScore},
        Your score: ${userScore}
        ___________________________`);
  }
  return;
}

while (userScore < 3 && computerScore < 3) {
  play();
}
userScore === 3 ? (winner = "user") : (winner = "computer");
alert(`${winner} is winner!`);
