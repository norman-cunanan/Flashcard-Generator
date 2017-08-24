
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var basicObject = require("./BasicObject.js");
var clozeObject = require("./ClozeObject.js")  

var score = 0;
var questionTally = 0;


function whichFlashCards () {
  inquirer.prompt([
    {
      type: "list",
      name: "whichCard",
      message: "\nWhat kind of flash cards?",
      choices: ["Basic Flashcards", "Cloze Flashcards"]
    },

  ])
  .then(function(cards) {
   
    if (cards.whichCard === "Basic Flashcards") {
      console.log("\nShow Basic Flashcards");
      console.log("---------------------\n");
      getBasicCard();

    } else {
        console.log("\nShow Cloze Flashcards");
        console.log("---------------------\n");
        getClozeCard();

    }
  });
}

function showBasicCards(front, back) {
  
    inquirer
    .prompt([
    
      {
        type: "input",
        message: front,
        name: "question"
      },

    ])
    .then(function(inquirerResponse) {
   
      if (inquirerResponse.question === back) {
        console.log("\nCorrect!");
        score++;
        questionTally++;
        console.log("Score: " + score + "/" + questionTally + "\n");

        if (questionTally < 5) {
          getBasicCard();
        } else {
            playAgain();
        }
      } else {
          console.log("\nWrong! The correct answer is " + '"' + back + '"');

          questionTally++;
          console.log("Score: " + score + "/" + questionTally + "\n");

          if (questionTally < 5) {
            getBasicCard();
          } else {
            playAgain();
          }
      }
    });
}

function showClozeCards(partial, cloze) {
  inquirer
  .prompt([
    
    {
      type: "input",
      message: partial,
      name: "question"
    },

  ])
  .then(function(inquirerResponse) {
   
    if (inquirerResponse.question === cloze) {
      console.log("\nYou are correct!");
      score++;
      questionTally++;
      console.log("Score: " + score + "/" + questionTally + "\n");

      if (questionTally < 5) {
          getBasicCard();
        } else {
            playAgain();
        }
    }
    else {
      console.log("\nYou are wrong!");
      questionTally++;
      console.log("Score: " + score + "/" + questionTally + "\n");

      if (questionTally < 5) {
          getBasicCard();
      } else {
          playAgain();
      }
    }
  });
}

function getBasicCard(){

  // for (i =0; i < basicObject.length; i++) {
  //   var card = new BasicCard(basicObject[i].front, basicObject[i].back);
  //   showBasicCards(card.front, card.back);
  // }

  //randomly grabs from basicObject
  var data = basicObject[Math.floor(Math.random() * basicObject.length)];
  var card = new BasicCard(data.front, data.back);
  showBasicCards(card.front, card.back);
}

function getClozeCard(){

  var data = clozeObject[Math.floor(Math.random() * clozeObject.length)];
  var card = new ClozeCard(data.fullText, data.cloze);
  showClozeCards(card.partial, card.cloze);
}

function playAgain(){
  inquirer.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: "Want to play again?",
      default: true
    },

  ])
  .then(function(playAgain) {
   
    if (playAgain.confirm) {
      score = 0;
      questionTally = 0;
      whichFlashCards();

    }
    else {
      console.log("\nThanks for playing!");

    }
  });
}

whichFlashCards();


// var firstCard = {
//   question: "Who was the first president of the United States?",
//   answer: "George Washington"
// }

// var card = BasicCard(firstCard.question, firstCard.answer);
