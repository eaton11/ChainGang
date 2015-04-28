var Fragment = Gang().Fragment();

var Blastoise = Gang().Element("div").Id("blastoiseCont").Class("pokemonCont").Data("type","water");
Blastoise
	.Chain("div").Id("blastoiseName").Class("pokemonName").Text("BLASTOISE!");
Blastoise
	.Chain("img").Src("blastoise.png").Id("blastoiseImg").Class("pokemonImg");


var Alakazam = Gang().Element("div").Id("alakazamCont").Class("pokemonCont").Data("type","psychic");
var AlakazamInfo = Alakazam.Chain("div").Id("alakazamInfo").Class("pokemonInfo");
	.Chain("div").Id("alakazamName").Class("pokemonName").Text("ALAKAZAM!")
	.Chain("div").Class("pokemonType").Text(Alakazam.dataset.type);
Alakazam
	.Chain("img").Src("alakazam.png").Id("alakazamImg").Class("pokemonImg");

var Fragment = Gang().Fragment().Chain(Blastoise).Chain(Alakazam);
container.appendChild(Fragment);

console.log(Fragment);
console.log(Blastoise);
console.log(Alakazam);
