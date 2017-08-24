// var basicObject = require("./BasicObject.js") 

var BasicCard = function(front, back) {
	this.front = front; //front of the flashcard
	this.back = back; //back of the flashcard
	// this.getBasicCard = function(front, back) {
	// 	var getBasicCard = new BasicCard(front, back)
	// };
};

BasicCard.prototype.printInfo = function() {
	console.log("Front: " + this.front);
	console.log("Back: " + this.back);
};

// for (i =0; i < basicObject.length; i++) {
// 	console.log(basicObject[i].front);
// }



// var firstCard = new BasicCard("Who was the first president of the United States?", 
// 	"George Washingtion");

// firstCard.printInfo();

// getBasicCard(data.front, data.back)

module.exports = BasicCard;