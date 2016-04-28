/* RFERER TO day_9_data.js FOR THE INPUT

The next year, just to show off, Santa decides to take the route with the longest distance instead.

He can still start and end at any two (different) locations he wants, and he still must visit each location exactly once.

For example, given the distances above, the longest route would be 982 via (for example) Dublin -> London -> Belfast.

What is the distance of the longest route?

*/
// We take the previous code for part 1 and just add a minus infront of the distance function in the shortest_route:

var shortest_route = function(z) {
	var min, the_order, i, x;
	min = 10000; 
	the_order = order(); 
	for (i = 0; i < 40320; i++) {
		x = the_order[i];
		if (-distance(x, z) < min) {
			min = -distance(x, z);
			console.log("x is "+x);
		}
	}
	return min; 
}	

