/* INPUT: 1321131112

Today, the Elves are playing a game called look-and-say. They take turns making sequences by reading aloud the previous sequence and using that reading as the next sequence. For example, 211 is read as "one two, two ones", which becomes 1221 (1 2, 2 1s).

Look-and-say sequences are generated iteratively, using the previous value as input for the next step. For each step, take the previous value, and replace each run of digits (like 111) with the number of digits (3) followed by the digit itself (1).

For example:
1 becomes 11 (1 copy of digit 1).
11 becomes 21 (2 copies of digit 1).
21 becomes 1211 (one 2 followed by one 1).
1211 becomes 111221 (one 1, one 2, and two 1s).
111221 becomes 312211 (three 1s, two 2s, and one 1).
Starting with the digits in your puzzle input, apply this process 40 times. What is the length of the result?

                    ---- Part 2 ----
Neat, right? You might also enjoy hearing John Conway talking about this sequence (that's Conway of Conway's Game of Life fame).

Now, starting again with the digits in your puzzle input, apply this process 50 times. What is the length of the new result?
*/

var in_a_row = function(a, start, say) {
  var i;
  for (i = start; i < a.length && a[i] === a[start]; i++)
    ;
  say[say.length] = i - start;
  say[say.length] = a[start];
};

var look_and_say = function(look) { // plays one round of look & say 
  var i, say;
  say = [];
  for (i = 0; i < look.length; i += say[say.length - 2]) in_a_row(look, i, say);
  return say;
};

var n_times = function(x, n) {  // plays n rounds of look & say  
  var turn, i;
  turn = x;
  for (i = 0; i < n; i++) turn = look_and_say(turn);
  return turn.length;
};


var test_in_a_row = function() {
  var i, input, got, want, cases;
  cases = [
    [ [ 1 ], [ 1, 1 ] ],
    [ [ 1, 2 ], [ 1, 1 ] ],
    [ [ 1, 1, 2 ], [ 2, 1 ] ],
    [ [ 1, 1 ], [ 2, 1 ] ],
    [ [ 1, 1, 1 ], [ 3, 1 ] ],
  ];
  for (i = 0; i < cases.length; i++) {
    got = [];
    in_a_row(cases[i][0], 0, got);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("in_a_row(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("it works like a fkn clock!");
    }
  }
};

var test_look_and_say = function() {
  var i, input, got, want, cases;
  cases = [
    [ [ 1 ], [ 1, 1 ] ],
    [ [ 1, 1 ], [ 2, 1 ] ],
    [ [ 2, 1 ], [ 1, 2, 1, 1 ] ],
    [ [ 1, 2, 1, 1 ], [ 1, 1, 1, 2, 2, 1 ] ],
    [ [ 1, 1, 1, 2, 2, 1 ], [ 3, 1, 2, 2, 1, 1 ] ],
  ];
  for (i = 0; i < cases.length; i++) {
    got  = look_and_say(cases[i][0]);
    want = cases[i][1];
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      console.log("look_and_say(" + cases[i][0] + "): got " + got + "; want " + want)
    } else {
      console.log("it works like a fkn clock!");
    }
  }
};

var test_n_times = function() {
  if (JSON.stringify(n_times([ 1 ], 6)) !== "8") {
    console.log("test 1 has failed, wanted 8, got " + JSON.stringify(n_times([ 1 ], 6)));
  } else  if (JSON.stringify(n_times([1, 3, 2, 1, 1, 3, 1, 1, 1, 2], 40)) !== "492982") {
    console.log("test 2 has failed, wanted 492982, got " + JSON.stringify(n_times([1, 3, 2, 1, 1, 3, 1, 1, 1, 2], 40)));	
  } else {
    console.log("it works like a fkn clock!");
  }
};

