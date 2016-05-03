/* REFER TO day_12_data.js TO GET THE INPUT
Santa's Accounting-Elves need help balancing the books after a recent order. 
Unfortunately, their accounting software uses a peculiar storage format. That's where you come in.
They have a JSON document which contains a variety of things: 
arrays ([1,2,3]), objects ({"a":1, "b":2}), numbers, and strings. 
Your first job is to simply find all of the numbers throughout the document and add them together.

For example:
[1,2,3] and {"a":2,"b":4} both have a sum of 6.
[[[3]]] and {"a":{"b":4},"c":-1} both have a sum of 3.
{"a":[-1,1]} and [-1,{"a":1}] both have a sum of 0. [] and {} both have a sum of 0.

You will not encounter any strings containing numbers.

What is the sum of all numbers in the document?
*/

var numbers = [0,1,2,3,4,5,6,7,8,9]; 

var contains_numbers = function(a) {
	var i, j;
	for (i = 0; i < a.length; i++) {
		for (j = 0; j < numbers.length; j++) {
			if (a[i] === JSON.stringify(numbers[j])) return true; 
		}
	}
	return false; 
}; 

var each_number = function(a) {
	var digits, i, j; 
	var digits = []; 
	for (i = 0; i < a.length; i++) {
		for (j = 0; j < numbers.length; j++) {
			if (a[i] === JSON.stringify(numbers[j]) && a[i-1] === "-") {
				digits[0] = "-";
				digits[digits.length] = parseInt(a[i]);
			} else {
				if (a[i] === JSON.stringify(numbers[j])) digits[digits.length] = a[i];
			}
		}
	}
	return digits; 
}
	
var all_the_numbers = function(document) {	
	var i, doc, new_doc; 
	doc = document.split(",")
	new_doc = []; 
	for (i = 0; i < doc.length; i++) {
		if (contains_numbers(doc[i]) === true) new_doc[new_doc.length] = each_number(doc[i]); 
	}
	console.log("new_doc is "+new_doc); 
	return new_doc;
}	
		
var the_sum = function(document) {
	var array, sum, digit, i, j; 
	array = all_the_numbers(document); 
	sum = 0;
	for (i = 0; i < array.length; i++){
		console.log("array[i] is "+ array[i]); 
		digit = "";
		if (array[i][0]!== "-") { 
			for (j = 0; j < array[i].length; j++) {
				digit+= array[i][j];
				console.log ("digit is "+digit); 
			}
			sum+= Number(digit);
			console.log("sum is "+sum);  
		} else {
			for (j = 1; j < array[i].length; j++) {
				digit+= array[i][j];
				console.log ("digit is "+digit); 
			}
			sum -= Number(digit);
			console.log("sum is "+sum);  
		}
	}
	return sum; 
}
