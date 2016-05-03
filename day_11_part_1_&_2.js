/* INPUT:cqkaabcc
Santa's previous password expired, and he needs help choosing a new one.
To help him remember his new password after the old one expires, Santa has devised a method of coming up with a password based on the previous one. Corporate policy dictates that passwords must be exactly eight lowercase letters (for security reasons), so he finds his new password by incrementing his old password string repeatedly until it is valid.
Incrementing is just like counting with numbers: xx, xy, xz, ya, yb, and so on. Increase the rightmost letter one step; if it was z, it wraps around to a, and repeat with the next letter to the left until one doesn't wrap around.
Unfortunately for Santa, a new Security-Elf recently started, and he has imposed some additional password requirements:
Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz. They cannot skip letters; abd doesn't count.
Passwords may not contain the letters i, o, or l, as these letters can be mistaken for other characters and are therefore confusing.
Passwords must contain at least two different, non-overlapping pairs of letters, like aa, bb, or zz.
For example:
hijklmmn meets the first requirement (because it contains the straight hij) but fails the second requirement requirement (because it contains i and l).
abbceffg meets the third requirement (because it repeats bb and ff) but fails the first requirement.
abbcegjk fails the third requirement, because it only has one double letter (bb).

The next password after abcdefgh is abcdffaa.
The next password after ghijklmn is ghjaabcc, because you eventually skip all the passwords that start with ghi..., since i is not allowed.
Given Santa's current password (cqkaabcc), what should his next password be?

--- Part Two ---

Santa's password expired again. What's the next one?

*/

var alphabet = 'abcdefghijklmnopqrstuvwxyz';  //length 26 from 0 to to 25
var let_num = {}; 
for (i = 0; i < alphabet.length; i++) {
	let_num[alphabet[i]] = i; 
}


var requirement_1 = function(string) {
	for (i = 0; i < string.length; i++) {
		if (string[i] === "i") return true;
		if (string[i] === "l") return true; 
		if (string[i] === "o") return true; 
	}
	return false
}; 


var requirement_2 = function(string) {
	var i;
	for (i = 0; i < string.length-2; i++) {
		if (string[i+1] === alphabet[let_num[string[i]]+1] && string[i+2] === alphabet[let_num[string[i]]+2]) return true; 
	}
	return false;
};

var requirement_3 = function(string) {
	var i, j;
	for (i = 0; i < string.length; i++) {
		if (string[i+1] === string[i]) {
			for (j = i+2; j < string.length; j++) {
				if (string[j+1] === string[j]) return true; 
			}
		}
	}
	return false;
};

var meets_requirements = function(string) {
	if (requirement_1(string) === false) {
		if (requirement_2(string) === true) {
			if (requirement_3(string) === true) return true; 
		}
	}
	return false;
}

var correct_password = function(pw) {
	while (!meets_requirements(pw)) {
		pw = password(pw); 
	}
	return pw;
};
	
	
var password = function(pw) {	
	var new_pw, i, j; 
	new_pw = pw.split('');
	j = 0;
	for (i = pw.length-1; i >= 0 && j === 0; i--) {
		j = let_num[pw[i]]; 
		if (j === alphabet.length - 1) j = 0; 
		else j++; 
		new_pw[i] = alphabet[j]; 
		//if (j !== 0) break; 
	}
	return new_pw.join('');		
}; 		

var test_requirements = function() {
    var i, input, got, want, cases;
    cases = [
    [ "abcdefgh", "false" ], 
    [ "abcdefgi", "true" ], 
    [ "abcdefgo", "true" ], 
    [ "abcdefgl", "true" ], 
    [ "abcdefgh", "true" ], 
    [ "abecdfig", "false" ], 
    [ "aobdcefg", "true" ], 
    [ "abcdefgl", "false" ],
	  [ "aabcdefg", "false" ],
	  [ "abbbcdef", "false" ],
	  [ "aabcdeff", "true" ],
	  [ "hijklmmn", "false" ],
	  [ "abbceffg", "false" ],
	  [ "abbcegjk", "false" ],
	  [ "abcdffaa", "true" ],
	  [ "ghjaabcc", "true" ],
    ];
    for (i = 0; i < 4; i++) {
      got  = requirement_1(cases[i][0]);
      want = cases[i][1];
      if (JSON.stringify(got) !== (want)) {
        console.log("requirement_1(" + cases[i][0] + "): got " + got + "; want " + want)
      } else {
        console.log("it works like a fkn clock!");
      }
    }
    for (i = 4; i < 7; i++) {
      got  = requirement_2(cases[i][0]);
      want = cases[i][1];
      if (JSON.stringify(got) !== (want)) {
        console.log("requirement_2(" + cases[i][0] + "): got " + got + "; want " + want)
      } else {
        console.log("it works like a fkn clock!");
      }
    }
    for (i = 7; i < 11; i++) {
      got  = requirement_3(cases[i][0]);
      want = cases[i][1];
      if (JSON.stringify(got) !== (want)) {
        console.log("requirement_3(" + cases[i][0] + "): got " + got + "; want " + want)
      } else {
        console.log("it works like a fkn clock!");
      }
    }
    for (i = 11; i < 16; i++) {
      got  = meets_requirements(cases[i][0]);
      want = cases[i][1];
      if (JSON.stringify(got) !== (want)) {
        console.log("meets_requirements(" + cases[i][0] + "): got " + got + "; want " + want)
      } else {
        console.log("it works like a fkn clock!");
      }
    }
};
