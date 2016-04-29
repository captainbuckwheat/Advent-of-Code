/* REFER TO day_1_data.js to get the input
 Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! 
 To save Christmas, he needs you to collect fifty stars by December 25th.
 
 Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the advent calendar; 
 the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
 
 Here's an easy puzzle to warm you up.
 
 Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. 
 He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

 An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.
 
 The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.
 
 For example:

  (()) and ()() both result in floor 0.
 
  ((( and (()(()( both result in floor 3.
 
  ))((((( also results in floor 3.
 
  ()) and ))( both result in floor -1 (the first basement level).
 
  ))) and )())()) both result in floor -3.
 
  To what floor do the instructions take Santa? */
  
  
var count = function(x) {
	var x, sum, i;
	var sum = 0;
	var i = 0;
	while (i < x.length) {
		if (x[i] === "(") {
			sum = sum + 1;
		}else if (x[i] === ")") {
			sum = sum - 1; 
		}
		i = i + 1;
	}
	return sum;
};

var test = function(){
	if(count('(())') !== 0) {
		console.log('test has failed #1');
	} else if (count('(()(()(') !== 3) {
		console.log('test has failed #2');
	} else {
		console.log('it works like a fkn clock!');
	}
};
