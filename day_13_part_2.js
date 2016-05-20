/* REFER TO day_13_data.js TO GET THE INPUT
In all the commotion, you realize that you forgot to seat yourself. At this point, you're pretty apathetic toward the whole thing, and your happiness wouldn't really go up or down regardless of who you sit next to. You assume everyone else would be just as ambivalent about sitting next to you, too.

So, add yourself to the list, and give all happiness relationships that involve you a score of 0.

What is the total change in happiness for the optimal seating arrangement that actually includes yourself? */

// for this part we use the code from part 1 with a edit to var names (line 22), var seating_arrangement (lines 29,32,33,...)
// level_of_happiness (lines 63, 77) as well as change in the factorial loop for var the_happiest (line 96)



var names = function(x) {
    if (x === 0) return "Alice";
    else if (x === 1) return "Bob";
    else if (x === 2) return "Carol";
    else if (x === 3) return "David";
    else if (x === 4) return "Eric";
    else if (x === 5) return "Frank";
    else if (x === 6) return "George";
    else if (x === 7) return "Mallory";
    else if (x === 8) return "CaptainBuckwheat";
}

var happiness = [];

var seating_arrangement = function() {
    var x, y, j, a;
    x = 362880;
    for (i = 0; i < x; i++) happiness[i] = [];
    for (j = 0; j < x; j++) {
        a = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]; 
        happiness[j][0] = a.splice(Math.floor(j / 40320), 1)[0];
        y = j % 40320;
        happiness[j][1] = a.splice(Math.floor(y / 5040), 1)[0];
        y = j % 5040;
        happiness[j][2] = a.splice(Math.floor(y / 720), 1)[0];
        y = j % 720;
        happiness[j][3] = a.splice(Math.floor(y / 120), 1)[0];
        y = j % 120;
        happiness[j][4] = a.splice(Math.floor(y / 24), 1)[0];
        y = j % 24;
        happiness[j][5] = a.splice(Math.floor(y / 6), 1)[0];
        y = j % 6;
        happiness[j][6] = a.splice(Math.floor(y / 2), 1)[0];
        y = j % 2;
        happiness[j][7] = a.splice(y, 1)[0];
        y = j;
        happiness[j][8] = a.splice(0, 1)[0];
    }
    return happiness;
};

var level_of_happiness = function(x, text) {
    var i, j, sum, mood, right, left;
    sum = 0;
    mood = [];
    for (i = 0; i < x.length; i++) mood[i] = names(x[i]);
    for (i = 0; i < mood.length; i++) {
        for (j = 0; j < text.length; j++) {
            right = i + 1;
            if (right > mood.length - 1) right = 0;
			if (mood[i] === names(8) || mood[right] === names(8)) break;
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
            if (left < 0) left = mood.length-1;
			if (mood[i] === names(8) || mood[left] === names(8)) break;
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
    for (i = 0; i < 362880; i++) {
        x = arrangement[i];
        if (level_of_happiness(x, z) > max) { max = level_of_happiness(x, z); }
    }
    return max;
}


