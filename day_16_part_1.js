/* 
Your Aunt Sue has given you a wonderful gift, and you'd like to send her a thank you card. However, there's a small problem: she signed it "From, Aunt Sue". You have 500 Aunts named "Sue".
So, to avoid sending the card to the wrong person, you need to figure out which Aunt Sue (which you conveniently number 1 to 500, for sanity) gave you the gift. You open the present and, as luck would have it, good ol' Aunt Sue got you a My First Crime Scene Analysis Machine! Just what you wanted. Or needed, as the case may be.
The My First Crime Scene Analysis Machine (MFCSAM for short) can detect a few specific compounds in a given sample, as well as how many distinct kinds of those compounds there are. According to the instructions, these are what the MFCSAM can detect:
children, by human DNA age analysis.
cats. It doesn't differentiate individual breeds.
Several seemingly random breeds of dog: samoyeds, pomeranians, akitas, and vizslas.
goldfish. No other kinds of fish.
trees, all in one group.
cars, presumably by exhaust or gasoline or something.
perfumes, which is handy, since many of your Aunts Sue wear a few kinds.
In fact, many of your Aunts Sue have many of these. You put the wrapping from the gift into the MFCSAM. It beeps inquisitively at you a few times and then prints out a message on ticker tape:
children: 3
cats: 7
samoyeds: 2
pomeranians: 3
akitas: 0
vizslas: 0
goldfish: 5
trees: 3
cars: 2
perfumes: 1
You make a list of the things you can remember about each Aunt Sue. Things missing from your list aren't zero - you simply don't remember the value.

What is the number of the Sue that got you the gift?
*/

var compounds = ["children", "cats", "samoyeds", "pomeranians", "akitas", "vizslas", "goldfish", "trees", "cars", "perfumes"]; 

var compounds_amount = function(x){
	if (x === 0) return 3; //children
	if (x === 1) return 7; //cats
	if (x === 2) return 2; //samoyeds
	if (x === 3) return 3; //pomeranians
	if (x === 4) return 0; //akitas
	if (x === 5) return 0; //vizslas
	if (x === 6) return 5; //goldfish
	if (x === 7) return 3; //trees
	if (x === 8) return 2; //cars
	if (x === 9) return 1; //perfumes
}
		
var guesses = function(a){
	var memories, each, aunt, item_1, item_2, item_3, item_1_amount, item_2_amount, item_3_amount, i, j, k, l; 
	memories = a.split("Sue");
	for (i = 1; i < memories.length; i++){ //i=1
		each = memories[i].split(" "); 
		aunt = each[1].replace(":",""); 
		item_1 = each[2].replace(":","");
		item_1_amount = each[3].replace(",","");
		item_2 = each[4].replace(":","");
		item_2_amount = each[5].replace(",","");
		item_3 = each[6].replace(":","");
		item_3_amount = each[7].replace(",","");
		for (j = 0; j < compounds.length; j++){
			if (item_1 === compounds[j] && item_1_amount === JSON.stringify(compounds_amount(j))){
				for (k = 0; k < compounds.length; k++){
					if(item_2 === compounds[k] && item_2_amount === JSON.stringify(compounds_amount(k))){
						for(l = 0; l < compounds.length; l++){
							if(item_3 === compounds[l] && item_3_amount === JSON.stringify(compounds_amount(l))){ return aunt; }
						}
					}
				}
			}
		}
	}
}
