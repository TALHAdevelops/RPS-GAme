console.log("ROCK   PAPER   SCISSORS");
import inquirer from "inquirer";
let userAnswer = await inquirer.prompt([
    {
        name: "choice1",
        type: "list",
        message: "Choose a material",
        choices: ["ROCK", "PAPER", "SCISSORS"],
    },
    {
        name: "choice2",
        type: "list",
        message: "Choose a material",
        choices: ["ROCK", "PAPER", "SCISSORS"],
    }
]);
if (userAnswer.choice1 === userAnswer.choice2) {
    console.log("DRAW");
}
else if ((userAnswer.choice1 === "ROCK" || userAnswer.choice1 === "PAPER")
    && (userAnswer.choice2 === "ROCK" || userAnswer.choice2 === "PAPER")) {
    console.log("PAPER wins");
}
else if ((userAnswer.choice1 === "PAPER" || userAnswer.choice1 === "SCISSORS")
    && (userAnswer.choice2 === "PAPER" || userAnswer.choice2 === "SCISSORS")) {
    console.log("SCISSORS wins");
}
else if ((userAnswer.choice1 === "ROCK" || userAnswer.choice1 === "SCISSORS")
    && (userAnswer.choice2 === "SCISSORS" || userAnswer.choice2 === "ROCK")) {
    console.log("ROCK wins");
}
else {
    console.log("ERROR");
}
