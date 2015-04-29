// var form = Gang().Fragment().Chain(
var form = 
Gang().Element("form").Id("superForm").Method("post").Action("../form.php")
	// .Chain("div")
	.Chain("input").Type("text").Name("fname").Listener("click",toggleColor).Class("blue").Placeholder("First Name")
	// .Sibling("br")
	// // .Up()
	// .Sibling("input").Type("Submit").Name("submitBtn").Value("GO!")
	.End();

// console.log(form);

container.appendChild(form);
// console.log(form);



function toggleColor() {
	console.log(this);
	this.RemoveClass("blue").Class("red");
	this.Sibling("br").Sibling("input").Placeholder("New Name").Listener("click",toggleColor).Class("blue");
	console.log();
}

//  ==========================

