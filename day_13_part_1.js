/* REFER TO data_day_12.js TO GET THE INPUT
In years past, the holiday feast with your family hasn't gone so well. Not everyone gets along! 
This year, you resolve, will be different. You're going to find the optimal seating arrangement 
and avoid all those awkward conversations.
You start by writing up a list of everyone invited and the amount their happiness would increase 
or decrease if they were to find themselves sitting next to each other person. 
You have a circular table that will be just big enough to fit everyone comfortably, 
and so each person will have exactly two neighbors.

For example, suppose you have only four attendees planned, and you calculate their potential happiness as follows:

Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.

Then, if you seat Alice next to David, Alice would lose 2 happiness units (because David talks so much), 
but David would gain 46 happiness units (because Alice is such a good listener), for a total change of 44.

If you continue around the table, you could then seat Bob next to Alice (Bob gains 83, Alice gains 54). 
Finally, seat Carol, who sits next to Bob (Carol gains 60, Bob loses 7) and David (Carol gains 55, David gains 41). 
After trying every other seating arrangement in this hypothetical scenario, you find that this one is the most optimal, with a total change in happiness of 330.

What is the total change in happiness for the optimal seating arrangement of the actual guest list?
*/




var names = function(x) {
  if (x === 0) return "Alice";
  else if (x === 1) return "Bob";
  else if (x === 2) return "Carol";
  else if (x === 3) return "David";
  else if (x === 4) return "Eric";
  else if (x === 5) return "Frank";
  else if (x === 6) return "George";
  else if (x === 7) return "Mallory";
}

var happiness = [];

var seating_arrangement = function() {
  var x, y, j, a;
  x = 40320;
  for (i = 0; i < x; i++) happiness[i] = [];
  for (j = 0; j < x; j++) {
    a = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
    happiness[j][0] = a.splice(Math.floor(j / 5040), 1)[0];
    y = j % 5040;
    happiness[j][1] = a.splice(Math.floor(y / 720), 1)[0];
    y = j % 720;
    happiness[j][2] = a.splice(Math.floor(y / 120), 1)[0];
    y = j % 120;
    happiness[j][3] = a.splice(Math.floor(y / 24), 1)[0];
    y = j % 24;
    happiness[j][4] = a.splice(Math.floor(y / 6), 1)[0];
    y = j % 6;
    happiness[j][5] = a.splice(Math.floor(y / 2), 1)[0];
    y = j % 2;
    happiness[j][6] = a.splice(y, 1)[0];
    y = j;
    happiness[j][7] = a.splice(0, 1)[0];
  }
  return happiness;
};

var level_of_happiness = function(x, text) {
  var i, j, sum, mood, xx, yy, right, left;
  sum = 0;
  mood = [];
  for (i = 0; i < x.length; i++) mood[i] = names(x[i]);
  for (i = 0; i < mood.length; i++) {
    for (j = 0; j < text.length; j++) {
      right = i + 1;
      if (right > mood.length - 1) right = 0;
      if (text[j].split(" ")[0] === mood[i] && text[j].split(" ")[10] === mood[right]) {
        if (text[j].split(" ")[2] === "gain") {
          sum += Number(text[j].split(" ")[3]);
          break;
        } else {
          sum -= Number(text[j].split(" ")[3]);
          break;
        }
      }
    }
    for (j = 0; j < text.length; j++) {
      left = i - 1;
      if (left < 0) left = 7;
      if (text[j].split(" ")[0] === mood[i] && text[j].split(" ")[10] === mood[left]) {
        if (text[j].split(" ")[2] === "gain") {
          sum += Number(text[j].split(" ")[3]);
          break;
        } else {
          sum -= Number(text[j].split(" ")[3]);
          break;
        }
      }
    }
  }
  return sum;
}

var the_happiest = function(z) {
  var max, arrangement, i, x;
  max = 1;
  arrangement = seating_arrangement();
  for (i = 0; i < 40320; i++) {
    x = arrangement[i];
    if (level_of_happiness(x, z) > max) { max = level_of_happiness(x, z); }
  }
  return max;
}


