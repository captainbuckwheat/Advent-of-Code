/* REFER TO day_14_data.js TO GET THE INPUT 
This year is the Reindeer Olympics! Reindeer can fly at high speeds, but must rest occasionally to recover their energy. 
Santa would like to know which of his reindeer is fastest, and so he has them race.

Reindeer can only either be flying (always at their top speed) or resting (not moving at all), 
and always spend whole seconds in either state.

For example, suppose you have the following Reindeer:
Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.

After one second, Comet has gone 14 km, while Dancer has gone 16 km. After ten seconds, Comet has gone 140 km, 
while Dancer has gone 160 km. On the eleventh second, Comet begins resting (staying at 140 km), 
and Dancer continues on for a total distance of 176 km. On the 12th second, both reindeer are resting. 
They continue to rest until the 138th second, when Comet flies for another ten seconds. 
On the 174th second, Dancer flies for another 11 seconds.

In this example, after the 1000th second, both reindeer are resting, and Comet is in the lead at 1120 km 
(poor Dancer has only gotten 1056 km by that point). 
So, in this situation, Comet would win (if the race ended at 1000 seconds).

Given the descriptions of each reindeer (input), after exactly 2503 seconds, 
what distance has the winning reindeer traveled? 
*/


var reindeer = function(speed, streak, rest, time){
	var period, occurence, time_left, remainder;
	period = streak + rest;  
	occurence = Math.floor(time/period); 
	time_left = time - (period * occurence); 
	if (time_left < streak) remainder = time_left * speed; 
	else remainder = streak * speed; 
	return remainder + occurence * streak * speed;
}

var distance = function(input, time) {
	var max,i, speed, streak, rest, run; 
	max = 0; 
	for (i = 0; i < input.length; i++) {
		speed = Number(input[i].split(" ")[3]);
		streak = Number(input[i].split(" ")[6]);
		rest = Number(input[i].split(" ")[13]);
		run = reindeer(speed, streak, rest, time);
		if (max < run) max = run; 
	}
	return max; 
}
