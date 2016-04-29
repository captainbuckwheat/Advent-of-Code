/* REFER TO day_5_data.js TO GET THE INPUT

Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

For example:

  ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
  aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
  jchzalrnumimnmhp is naughty because it has no double letter.
  haegwjzuvuyypxyu is naughty because it contains the string xy.
  dvszwmarrgswjxmb is naughty because it contains only one vowel.
  
How many strings are nice?
*/

var contains_three_vowels = function(a) {
	var i, count; 
	count = 0;
	for (i = 0; i < a.length; i++) {
		if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') {
			count += 1; 
		}
		if (count === 3) {
			return true; 
		}
	}
	return false; 
};		


var contains_twice = function(a){
	var i; 
	for (i=0; i < a.length-1; i++){
		if (a[i]===a[i+1]){
			return true; 
		}
	}
	return false; 
};	


var contains_string = function(a) {
	var i, count; 
	count = 0;
	for (i = 0; i < a.length-1; i++){
		if ((a[i] === 'a' && a[i+1] === 'b') || (a[i] === 'c' && a[i+1] === 'd') || (a[i] === 'p' && a[i+1] === 'q') || (a[i] === 'x' && a[i+1] === 'y')){
			return true; 
		}
	}
	return false; 
};

var nice = function(a) {
	if (contains_three_vowels(a) === true && contains_twice(a) === true && contains_string(a) === false){
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
			count += 1; 
		}
	}
	return count; 
}; 

var test_contains_three_vowels = function() {
  var i, input, got, want, cases;
  cases = [
    [ "aaa", true ],
    [ "aab", false ],
    [ "aabe", true ],
    [ "aabkjlooo", true ],
  ];
  for (i = 0; i < cases.length; i++) {
    got  = contains_three_vowels(cases[i][0]);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("contains_three_vowels(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("contains_three_vowels() works like a fkn clock!");
    }
  }
};

var test_contains_twice = function() {  
  var i, input, got, want, cases;
  cases = [
    [ "xx", true ],
    [ "xaacx", true ],
    [ "abcdebb", true ],
    [ "xabac", false ],
    [ "", false ],
  ];
  for (i = 0; i < cases.length; i++) {
    got  = contains_twice(cases[i][0]);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("contains_twice(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("contains_twice() works like a fkn clock!");
    }
  }
};

var test_contains_string = function() {
  var i, input, got, want, cases;
  cases = [
    [ "xy", true ],
    [ "aaabb", true ],
    [ "prprqp", false ],
    [ "xxpq", true ],
    [ "xcdy", true ],
    [ "xcady", false ],
    [ "", false ],
  ];
  for (i = 0; i < cases.length; i++) {
    got  = contains_string(cases[i][0]);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("contains_string(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("contains_string() works like a fkn clock!");
    }
  }
}; 

var test_nice = function() {
  var i, input, got, want, cases;
  cases = [
    [ "ugknbfddgicrmopn", true ],
    [ "aaa", true ],
    [ "jchzalrnumimnmhp", false ],
    [ "haegwjzuvuyypxyu", false ],
    [ "dvszwmarrgswjxmb", false ],
    [ "x", false ],
    [ "", false ],
  ];
  for (i = 0; i < cases.length; i++) {
    got  = nice(cases[i][0]);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("nice(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("nice() works like a fkn clock!");
    }
  }
}; 

