var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question("Please Enter Your Name:  ");

console.log(chalk.bgWhiteBright.black.bold("\n Welcome to Futsal Fanatsy Quiz " + userName.toUpperCase() + " " ));

console.log(chalk.bgRed.whiteBright.underline("\nRules for this Quiz Game:" ) + "\n * There are 10 Questions in this Quiz. \n * Choose any 1 option from a,b,c,d and Hit Enter. \n * If your Answer is correct : You will get"+ chalk.green.bold(" 1 ") + "point else" + chalk.red.bold(" 0. ") + chalk.bgWhiteBright.black.bold("\n\n- LET'S GET STARTED -\n"))

var score = 0;
var highscore = [
  {
    name: "Shivam",
    score: 9,
  },
   {
    name: "Chandan",
    score: 8,
  },
  {
    name: "Mayank",
    score: 7,
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("\nYAY! Right Answer!\n"))
    score++;
  } else {
    console.log(chalk.redBright.bold("\nOOPS! Wrong Answer!\n"))
  }
  console.log("Your Current score is: ",chalk.cyanBright.bold(score))
  console.log("-------------------------------------------")
}

var questions =[ {
  question: chalk.cyanBright("Q1. What was Lionel Messi's schoolboy Team Name?\n") + " a) Barcelona\n b) La Masia\n c) Argentina Boys FC\n d) Newell's Old Boys\n",
  answer: "d"
} , {
   question: chalk.cyanBright("\nQ2. Which Ballon d'Or-winning footballer had a galaxy named after him? Galaxy Cosmos Redshift 7!\n")+ " a) Bastian Schweinsteiger\n b) David Beckham\n c) Cristiano Ronaldo\n d) Frank Ribery\n ",
    answer: "c"
},  {
  question: chalk.cyanBright("\nQ3. At what time Kun Aguero fired Manchester City to win The PL Title after 44 years?\n") + " a) 93:60\n b) 95:20\n c) 95:59\n d) 93:20\n ",
  answer: "d"
}, {
  question: chalk.cyanBright("\nQ4. Which country has appeared in three World Cup finals, but never won the competition?\n") + " a) China\n b) Netherlands\n c) Norway\n d) Poland\n ",
  answer: "b"
}, {
  question: chalk.cyanBright("\nQ5. With 202 Clean Sheets, which Goalkeeper has the best record in PL?\n") + " a) P.Cech\n b) Ederson\n c) Van der sar\n d) Joe Hart\n ",
  answer: "a"
}, {
  question: chalk.cyanBright("\nQ6. I was originally a striker before becoming a defender. I played 11 seasons for the same club before managing them. I've won two Bundesliga titles and a Champions League. Who am I?\n") + " a) H.Flick\n b) Guardiola\n c) J.Klopp\n d) Robert Mancini\n ",
  answer: "c"
}, {
  question: chalk.cyanBright("\nQ7. I have played as a Midfileder, won Champions League. As a manager I have highest no. of trophies won by a coach till now. Who am I?\n") + " a) Zidane\n b) Guardiola\n c) J.Klopp\n d) Alex Ferguson\n ",
  answer: "b"
}, {
  question: chalk.cyanBright("\nQ8. The record age for youngest head coach in the Bundesliga is 28 years and 205 days. Who was it?\n") + " a) Julian Nagelsmann\n b) H.Flick\n c) A.Conte\n d) Mourinho\n ",
  answer: "a"
}, {
  question: chalk.cyanBright("\nQ9. He took 27 games to score his first Champions League goal, played in PL, LaLiga, Primeira Liga & Serie A. Who is he?\n") + " a) Z.Zidane\n b) C.Ronaldo\n c) M.Salah\n d) K.Havertz\n ",
  answer: "b"
}, {
  question: chalk.cyanBright("\nQ10. Who holds the world record for highest goals in a single calendar year?\n") + " a) R.Lewandowski\n b) C.Ronaldo\n c) G.Muller\n d) L.Messi\n ",
  answer: "d"
}
]

for(var i = 0 ; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.bold.magentaBright("-------THANKS FOR PLAYING " + userName.toUpperCase() + "-------"))

console.log(chalk.bgRed.whiteBright.underline("\nYour Final Score is : ", score))

if(score > highscore[0].score)
  {
    console.log(chalk.bgWhiteBright.black.bold("\nYAY! Congratulation You have beaten the Highscore.\n"));
    console.log(chalk.bold.cyanBright("-----------------------------------------------------------"));
    console.log(chalk.bgWhiteBright.black.italic.bold("\nVoila!, Send me a screenshot and I'll update your Highscore..."));
    console.log(chalk.bold.cyanBright("------------------------------------------------------------"));
  } else {
  console.log(chalk.bgWhiteBright.black.bold("\nSorry! You haven't beaten the Highscore, Refresh if you want to play again.\n"));
}

if (readlineSync.keyInYN(chalk.bgWhiteBright.black.bold("\nWait!!!, Do you want to see the Highscore Board?"))) {
    console.log(chalk.bgRed.whiteBright.underline("\n---- HIGHSCORE BOARD ---- \n"));
    for (var j = 0; j < highscore.length; j++) {
      var currentHighScore = highscore[j];
      console.log(chalk.bgWhiteBright.black.bold(currentHighScore.name + " : " + currentHighScore.score));
    }
  }
  else {
    console.log(chalk.bgRed.bold.whiteBright("\nTILL THEN BYE!"));
  }
  console.log(chalk.underline("\n\nThis CLI APP was designed by Shivam Mishra"));