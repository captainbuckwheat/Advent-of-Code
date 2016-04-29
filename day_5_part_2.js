/* REFER TO day_5_data.js TO GET THE INPUT

Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous.

Now, a nice string is one with all of the following properties:

It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

For example:

qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).

xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.

uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.

ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.

How many strings are nice under these new rules?
*/

var pair_of_letters = function(a) {
	var k, i; 
	for (k = 0; k < a.length-3; k++) {
		for (i = (k+2); i < a.length-1; i++) {
			if (a[k] === a[i] && a[k+1] === a[i+1]) {
				return true;
			}
		}
	}		
	return false;
}; 

var repeated_letter = function(a) {
	var i; 
	for (i = 0; i < a.length-2; i++) {
		if (a[i] === a[i+2]){
			return true;
		}
	}
	return false; 
};


var nice = function(a) {
	if (pair_of_letters(a) === true && repeated_letter(a) === true) {
		return true;
	}
	return false;
}

var count_nice = function(a) {
	var i, string, count; 
	string = a.split(' ');
	count = 0;
	for (i = 0; i < string.length; i++) {
		if (nice(string[i]) === true) {
			count++; 
		}
	}
	return count; 
}

var test_count_nice = function() {            
  if (count_nice('xyxy abcdefeghi aaaa') !== 2) {
	  console.log('failed count_nice #1')	
  } else if (count_nice('xyxy abcdefeghi aaaa qjhvhtzxzqqjkmpb xyx') !== 3) {
  	console.log('failed count_nice #2')	
  } else if (count_nice('hgtutghg aaaa xxyxx zxhhjh') !== 3){
  	console.log('failed count_nice #3')	
  } else if (count_nice('uurcxstgmygtbstgn ieodomkazucvgmuy xyxy') !== 1) {
  	console.log('failed count_nice #3')	
  } else if (count_nice('') !==0 ){
  	console.log('failed count_nice #4')	
  }	else {
    console.log("count_nice() works like a fkn clock!"); 
  }
};
  
