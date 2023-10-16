let level = 1;

let result = document.querySelectorAll(".results");

let userOptions = document.querySelectorAll(".userOptions");

let opponentImage = document.querySelector("#oppenentImageGeneration");



let round = document.querySelector(".rounds");

let userScore = document.querySelector(".userScore");

let opponentScore = document.querySelector(".opponentScore");

opponentImage.style.visibility = "hidden";



let userChoice;

let userPoints = 0,
  opponentPoints = 0;

// Function to Add Click Event on the Options available on user side. And storing the user Selected option 'Id'.

userOptions.forEach((element) => {
  element.addEventListener("click", (e) => {
    userChoice = e.target.id;
    if (userChoice == "rock") {
      setTimeout(() => {
        userOptions[1].style.visibility = "hidden";
        userOptions[2].style.visibility = "hidden";
      }, 200);
      setTimeout(() => {
        userOptions[1].style.visibility = "visible";
        userOptions[2].style.visibility = "visible";
      }, 400);
      console.log("rock is clicked");
    } else if (userChoice == "paper") {
      setTimeout(() => {
        userOptions[0].style.visibility = "hidden";
        userOptions[2].style.visibility = "hidden";
      }, 200);
      setTimeout(() => {
        userOptions[0].style.visibility = "visible";
        userOptions[2].style.visibility = "visible";
      }, 400);
    } else if (userChoice == "scissors") {
      setTimeout(() => {
        userOptions[0].style.visibility = "hidden";
        userOptions[1].style.visibility = "hidden";
      }, 200);
      setTimeout(() => {
        userOptions[0].style.visibility = "visible";
        userOptions[1].style.visibility = "visible";
      }, 400);
    }
    generateOpponentChoice();
  });
});

let randomChoice;
const generateOpponentChoice = () => {
  let possibleOutcomes = ["rock", "paper", "scissors"];
  randomChoice = possibleOutcomes[Math.floor(Math.random() * 3)];
  opponentImage.style.visibility = "visible";
  opponentImage.src = randomChoice + ".svg";
  generateResult();
};

const generateResult = () => {
  if (userChoice == randomChoice) {
    level--;
  } else if (userChoice == "rock" && randomChoice == "scissors") {
    userPoints++;
  } else if (userChoice == "paper" && randomChoice == "rock") {
    userPoints++;
  } else if (userChoice == "scissors" && randomChoice == "paper") {
    userOptions++;
  } else if (userChoice == "scissors" && randomChoice == "rock") {
    opponentPoints++;
  } else if (userChoice == "rock" && randomChoice == "paper") {
    opponentPoints++;
  } else if (userChoice == "paper" && randomChoice == "scissors") {
    opponentPoints++;
  }

  level++;

  userScore.innerHTML = userPoints;

  opponentScore.innerHTML = opponentPoints;

  round.innerHTML = level;

  while (level == 7) {
    level = 1;
    let win = document.querySelector(".win");
    if(userPoints>opponentPoints){
        win.innerHTML ="You Won!!!"
    }
    else if(userPoints<opponentPoints){
        win.innerHTML ="You Lost!!!"
        
    }
    else if (userPoints==opponentPoints){
        win.innerHTML ="Drow!!!"
    }
    setTimeout(()=>{
        location.reload();
    },2000)
    
  }
};
