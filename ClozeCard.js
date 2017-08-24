var ClozeCard = function(text, cloze) {
	this.fullText = text; // full sentence
	this.cloze = cloze; // cloze-deleted portion
	this.partial = text.replace(cloze, "... "); //partial text
}

ClozeCard.prototype.printInfo = function() {
	console.log("Partial: " + this.partial);
	// console.log("Cloze: " + this.cloze);
	// console.log("Full Text: " + this.fullText);
}

// var firstCard = new ClozeCard("George Washingtion was the first president of the United States", 
// 	"George Washingtion");

// console.log("ClozeCard/partial: " + firstCard.partial);

// firstCard.printInfo();

module.exports = ClozeCard;