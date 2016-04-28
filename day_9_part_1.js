/* REFER TO day2_data.js for the input 
Every year, Santa manages to deliver all of his presents in a single night.

This year, however, he has some new locations to visit; his elves have provided him the distances between every pair of locations. He can start and end at any two (different) locations he wants, but he must visit each location exactly once. What is the shortest distance he can travel to achieve this?

For example, given the following distances:

London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
The possible routes are therefore:

Dublin -> London -> Belfast = 982
London -> Dublin -> Belfast = 605
London -> Belfast -> Dublin = 659
Dublin -> Belfast -> London = 659
Belfast -> Dublin -> London = 605
Belfast -> London -> Dublin = 982
The shortest of these is London -> Dublin -> Belfast = 605, and so the answer is 605 in this example.

What is the distance of the shortest route?
*/

var names = function(x) {
	if (x === 0) return "Arbre"; 
	else if (x === 1) return "AlphaCentauri"; 
	else if (x === 2) return "Faerun"; 
	else if (x === 3) return "Norrath"; 
	else if (x === 4) return "Snowdin";
	else if (x === 5) return "Straylight";
	else if (x === 6) return "Tambi";
	else if (x === 7) return "Tristram"; 
}

var route = []; 

var order = function() {
	var x, y, j, num, a;
	x = 40320;
	for (i = 0; i < x; i++) route[i]=[];
	for (j = 0; j < x; j++) {
		a = [0,1,2,3,4,5,6,7];
		route[j][0] = a.splice(Math.floor(j/5040), 1)[0];
		y = j%5040; 
		route[j][1] = a.splice(Math.floor(y/720), 1)[0];
		y = j%720;
		route[j][2] = a.splice(Math.floor(y/120), 1)[0];
		y = j%120; 
		route[j][3] = a.splice(Math.floor(y/24), 1)[0];
		y = j%24; 
		route[j][4] = a.splice(Math.floor(y/6), 1)[0];
		y = j%6; 
		route[j][5] = a.splice(Math.floor(y/2), 1)[0];
		y = j%2; 
		route[j][6] = a.splice(y, 1)[0];
		y = j; 
		route[j][7] = a.splice(0, 1)[0];
	}
	return route
}

var distance = function(a, z) {
	var i, j, sum, path; 
	sum = 0; 
	path = []; 
	for (i = 0; i < a.length; i++) path[i] = names(a[i]);
	for (i = 0; i < path.length; i++) {
		for (j = 0; j < z.length; j++) {
			if (z[j].split(" ")[0] === path[i] || z[j].split(" ")[2] === path[i]) {
				if (z[j].split(" ")[0] === path[i+1] || z[j].split(" ")[2] === path[i+1]) {
					sum += Number(z[j].split(" ")[4]);
					break;
				}
			} 
		}
	}
	return sum;
}

var shortest_route = function(z) {
	var min, the_order, i, x;
	min = 10000; 
	the_order = order(); 
	for (i = 0; i < 40320; i++) {
		x = the_order[i];
		if (distance(x, z) < min) {
			min = distance(x, z);
			console.log("x is "+x);
		}
	}
	return min; 
}	
	
