// var form = Gang().Fragment().Chain(
var form = 
Gang().Element("form").Id("superForm").Method("post").Action("../form.php")
	// .Chain("div")
	.Chain("input").Type("text").Name("fname").Listener("focus",toggleColor).Listener("blur",toggleColor).Class("blue").Placeholder("First Name")
	// .Sibling("br")
	// // .Up()
	// .Sibling("input").Type("Submit").Name("submitBtn").Value("GO!")
	.End();

// console.log(form);

container.appendChild(form);
// console.log(form);


function toggleColor() {
	console.log(this);
	this.ToggleClass("blue").ToggleClass("red");
	this.Sibling("br").Sibling("input").Placeholder("New Name");
	console.log();
}

//  ==========================

