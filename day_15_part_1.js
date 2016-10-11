/*
Today, you set out on the task of perfecting your milk-dunking cookie recipe. All you have to do is find the right balance of ingredients.
Your recipe leaves room for exactly 100 teaspoons of ingredients. You make a list of the remaining ingredients you could use to finish the recipe (your puzzle input) and their properties per teaspoon:
capacity (how well it helps the cookie absorb milk)
durability (how well it keeps the cookie intact when full of milk)
flavor (how tasty it makes the cookie)
texture (how it improves the feel of the cookie)
calories (how many calories it adds to the cookie)
You can only measure ingredients in whole-teaspoon amounts accurately, and you have to be accurate so you can reproduce your results in the future. The total score of a cookie can be found by adding up each of the properties (negative totals become 0) and then multiplying together everything except calories.

For instance, suppose you have these two ingredients:
Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3
Then, choosing to use 44 teaspoons of butterscotch and 56 teaspoons of cinnamon (because the amounts of each ingredient must add up to 100) would result in a cookie with the following properties:
A capacity of 44*-1 + 56*2 = 68
A durability of 44*-2 + 56*3 = 80
A flavor of 44*6 + 56*-2 = 152
A texture of 44*3 + 56*-1 = 76
Multiplying these together (68 * 80 * 152 * 76, ignoring calories for now) results in a total score of 62842880, which happens to be the best score possible given these ingredients. If any properties had produced a negative total, it would have instead become zero, causing the whole score to multiply to zero.

Given the ingredients in your kitchen and their properties, what is the total score of the highest-scoring cookie you can make?
*/

var recipe_score = function(t){
	var ingredients, properties, l, new_score, score, i, j, k; 
	score = 0;
	ingredients = [];
	properties = []; 
	for (i = 0; i < 4; i++) {ingredients[i] = [];}
	for (i = 0; i < 4; i++) {properties[i] = [];}
	ingredients = [
		[2,0,-2,0],
		[0,5,-3,0],
		[0,0,5,-1],
		[0,-1,0,5],
	];
	for (i = 0; i <= t; i++){
		l = t;
		for (j = 0; j <= t; j++){
			l = t;
			for (k = 0; k <= t; k++){
				if (i + j + k <= t) {
					l = t-i-j-k;
					for (m = 0; m < 4; m++){
						properties[m] = ingredients[0][m] * l + ingredients[1][m]*i +  ingredients[2][m]*j +ingredients[3][m]*k;
						if (properties[m] < 0) {properties[m] = 0;}
					}
					new_score = properties[0] * properties[1] * properties[2] * properties[3]; 
					if (new_score > score) { score = new_score;}
				}
			}
		}
	}	
	return score;
}
				 
