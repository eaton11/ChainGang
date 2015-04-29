var Blastoise = Gang().Element("div").Id("blastoiseCont").Class("pokemonCont").Data("type","water");
Blastoise
	.Chain("div").Id("blastoiseName").Class("pokemonName").Text("BLASTOISE!")
	.Sibling("div").Class("pokemonType").Text(Blastoise.dataset.type);
Blastoise
	.Chain("img").Src("blastoise.png").Id("blastoiseImg").Class("pokemonImg");


// THIS is what the alakazam section would look like using vanilla javascript.
// ===============================================
// var alakazamCont = document.createElement("div");
// 	alakazamCont.id = "alakazamCont";
// 	alakazamCont.classList.add("pokemonCont");
// 	alakazamCont.dataset.type = "psychic";
// var alakazamInfoCont = document.createElement("div");
// 	alakazamInfoCont.id = "alakazamInfo";
// 	alakazamInfoCont.classList.add("pokemonInfo");
// 	var alakazamName = document.createElement("div");
// 		alakazamName.id = "alakazamName";
// 		alakazamName.classList.add("pokemonName");
// 		alakazamName.appendChild(document.createTextNode("ALAKAZAM"));
// 			var exclamationPoints = document.createElement("span");
// 			exclamationPoints.appendChild(document.createTextNode("!!!"));
// 		alakazamName.appendChild(exclamationPoints);
// 	var alakazamType = document.createElement("div");
// 		alakazamType.classList.add("pokemonType");
// 		alakazamType.Text("Psychic");
// alakazamInfoCont.appendChild(alakazamName);
// alakazamInfoCont.appendChild(alakazamType);
// var alakazamImg = document.createElement("img");
// 		alakazamName.src = "alakazam.png";
// 		alakazamName.id = "alakazamImg";
// 		alakazamName.classList.add("pokemonImg");
// alakazamCont.appendChild(alakazamInfoCont);
// alakazamCont.appendChild(alakazamImg);
// ===============================================

// This is using Chain Gang
// ===============================================
var Alakazam = 
Gang().Element("div").Id("alakazamCont").Class("pokemonCont").Data("type","psychic") 
	.Chain("div").Id("alakazamInfo").Class("pokemonInfo")
		.Chain("div").Id("alakazamName").Class("pokemonName").Text("ALAKAZAM")
			.Chain("span").Text("!!!")
		.Up()
		.Sibling("div").Class("pokemonType").Text("Psychic")
	.Up()
.Up()
	.Chain("img").Src("alakazam.png").Id("alakazamImg").Class("pokemonImg")
	.End();
// ===============================================

var Fragment = Gang().Fragment().Chain(Blastoise).Chain(Alakazam);
container.appendChild(Fragment);