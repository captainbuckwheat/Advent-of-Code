/* REFER TO day_14_data.js TO GET THE INPUT
Seeing how reindeer move in bursts, Santa decides he's not pleased with the old scoring system.

Instead, at the end of each second, he awards one point to the reindeer currently in the lead. 
(If there are multiple reindeer tied for the lead, they each get one point.) He keeps the traditional 2503 second time limit, 
of course, as doing otherwise would be entirely ridiculous.

Given the example reindeer from above, after the first second, Dancer is in the lead and gets one point. 
He stays in the lead until several seconds into Comet's second burst: after the 140th second, 
Comet pulls into the lead and gets his first point.
Of course, since Dancer had been in the lead for the 139 seconds before that, he has accumulated 139 points by the 140th second.

After the 1000th second, Dancer has accumulated 689 points, while poor Comet, our old champion, only has 312. 
So, with the new scoring system, Dancer would win (if the race ended at 1000 seconds).

Again given the descriptions of each reindeer (in your puzzle input), after exactly 2503 seconds, 
how many points does the winning reindeer have?
*/

var reindeer = function(speed, streak, rest, time) {
    var period, occurence, time_left, remainder;
    period = streak + rest;
    occurence = Math.floor(time / period);
    time_left = time - (period * occurence);
    if (time_left < streak) remainder = time_left * speed;
    else
        remainder = streak * speed;
    return remainder + occurence * streak * speed;
}

var distance = function(input, time) {
    var i, t, speed, streak, rest, run, distances, points, max, horse;
    var distances = [];
    var points = [];
    for (i = 0; i < input.length; i++) {
        distances[i] = 0;
        points[i] = 0;
    };
    max = 0;
    for (t = 1; t <= time; t++) {
        for (i = 0; i < input.length; i++) {
            speed = Number(input[i].split(" ")[3]);
            streak = Number(input[i].split(" ")[6]);
            rest = Number(input[i].split(" ")[13]);
            run = reindeer(speed, streak, rest, t);
            distances[i] = run;
        }
        for (i = 0; i < distances.length; i++) if (distances[i] > max) max = distances[i];
        for (i = 0; i < distances.length; i++) if (distances[i] === max) points[i]++;
    }
    return points;
}
