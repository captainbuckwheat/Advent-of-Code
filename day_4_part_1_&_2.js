/* THE INPUT: "ckczppom"  REFER TO day_4_md5.js TO GET md5()

Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically forward-thinking little girls and boys.

To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

For example:

If your secret key is abcdef, the answer is 609043, 
because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....

              -----PART 2------
              
Now find one that starts with six zeroes.
 - for the second part we change 5 to 6 in hash()

*/


var hash = function(a) {
  var i, s, x, num_zeroes; 
  for (i = 1; i < 999999999; i++) {
    x = md5(a + i); 
    num_zeroes = 0; 
    for (s = 0; s < 5; s++) {
      if (x[s] === "0") {
        num_zeroes += 1; 
        }
        if (num_zeroes === 5) {
          return i; 
        }
      }
    }
  };
  
  var test_hash = function() {
    if (JSON.stringify(hash("ckczppom")) !== "117946") {
      console.log("test has failed! wanted 117946 and got " + hash("ckczppom"));
    } else {
      console.log("it works like a fkn clock!")
    }
  };
