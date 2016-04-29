/* REFER TO day_6_data.js TO GET THE INPUT
Because your neighbors keep defeating you in the holiday house decorating contest year after year, you've decided to deploy one million lights in a 1000x1000 grid.
Furthermore, because you've been especially nice this year, Santa has mailed you instructions on how to display the ideal lighting configuration.
Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at 0,0, 0,999, 999,999, and 999,0. The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs. Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square. The lights all start turned off.
To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

For example:
turn on 0,0 through 999,999 would turn on (or leave on) every light.
toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.

After following the instructions, how many lights are lit?
*/

var empty_grid = function(xsize,ysize){
	var grid, j, i;
	grid = []; 
	for (i=0; i <= ysize; i++){
		grid [i] = []; 
		for (j=0; j<= xsize; j++){
			grid[i][j] = 0;
		}
	}return grid; 	
};

var parse_instr = function(s){
	var string, k, first_xy, first_x, first_y, second_xy, second_x, second_y, instr; 
	string = s.split(' ');
	console.log('string is '+string);
	instr = [];  
	console.log('string length is '+string.length);
	if (string.length===5){
	    k = 2;
	}else if (string.length===4){
		k = 1; 
	}else if (string.length===0){
		console.log('I told you so!')
	}
	first_xy = string[k]; 
	console.log('first_xy is '+first_xy);
	first_xy = first_xy.split(','); 
	first_x = +first_xy[0]; 
	console.log('first x is '+first_x);
	first_y = +first_xy[1];
	console.log('first y is '+first_y);
	second_xy = string[k+2]; 
	console.log('second_xy is '+second_xy);
	second_xy = second_xy.split(',');
	second_x = +second_xy[0]; 
	console.log('second x is '+second_x);
	second_y = +second_xy[1];
	console.log('second y is '+second_y);
	instr[0]=string[k-1];
	console.log('instr 0 is '+instr[0])
	instr[1]=first_x;
	instr[2]=first_y;
	instr[3]=second_x;
	instr[4]=second_y;
	
	return instr; 	
};

if (JSON.stringify(parse_instr('turn on 2,2 through 5,5'))!=='["on",2,2,5,5]'){
	console.log("failed parse_instr #1")
}
if (JSON.stringify(parse_instr('turn off 2,3 through 4,5'))!=='["off",2,3,4,5]'){
	console.log("failed parse_instr #2")
}
if (JSON.stringify(parse_instr('toggle 2,2 through 5,5'))!=='["toggle",2,2,5,5]'){
	console.log("failed parse_instr #3")
}


var execute_instr = function(grid, instr){
	var op, x1,y1,x2,y2,i,j;
	op = instr[0]; 
	x1 = instr[1];
	y1 = instr[2];
	x2 = instr[3];
	y2 = instr[4];
	if (op ==='on'){
 		for (i=y1; i<(y2+1); i++){
 			for (j=x1; j<(x2+1); j++){
 				grid[i][j] = 1;
 			}
 		}
 	} else if (op==='off'){
 		for (i=y1; i<(y2+1); i++){
 			for (j=x1; j<(x2+1); j++){
 				grid[i][j] = 0;
 			}
 		}
	} else if (op==='toggle'){
 		for (i=y1; i<(y2+1); i++){
 			for (j=x1; j<(x2+1); j++){
				if (grid[i][j] === 0){
					grid[i][j] = 1;
				} else if (grid[i][j] === 1){
					grid[i][j] = 0;
				}	
			}
		}			
	} 
	return grid;
};

if (JSON.stringify(execute_instr([[0]], ['on', 0, 0, 0, 0])) != "[[1]]") {
  console.log("execute test 1 failed");
}
if (JSON.stringify(execute_instr([[0,0],[1,0]], ['toggle', 0, 0, 1, 1])) != "[[1,1],[0,1]]") {
  console.log("execute test 1 failed");
}




var count_on = function(grid){
	var count, i; 
	count = 0;
	for (i=0; i<grid.length; i++){
		for (j=0; j<grid[i].length; j++){
			if (grid[i][j] === 1){
				count = count + 1; 
			};
		}
	}
	return count;
};

var test_count_on = function() {
  if (count_on([[0,0,1,1,0,1]]) !== 3) {
    alert("test 1 failed");
  }
  if (count_on([[]]) !== 0) {
    alert("test 2 failed");
  }
  if (count_on([[1]]) !== 1) {
    alert("test 3 failed");
  }
  if (count_on([[1,1]]) !== 2) {
    alert("test 4 failed");
  }
  if (count_on([[1,1,1]]) !== 3) {
    alert("test 5 failed");
  }
  if (count_on([[1,0,1]]) !== 2) {
    alert("test 6 failed");
  }
  if (count_on([[1,0,1],[0,0,1]]) !== 3) {
    alert("test 7 failed");
  }  
}
test_count_on(); 


var convert_to_lines = function(a){
	var line = a.split('\n');
	return line;
}

var main = function(s){
	var a, i, grid, instr; 
	grid = empty_grid(999, 999); 
	a = convert_to_lines(s);
	for (i=0; i<a.length; i++){
		instr = parse_instr(a[i]); 
		grid = execute_instr(grid, instr);
	}
	return count_on(grid);
}


var test_main = function(){
	if (main('turn on 1,1 through 2,2\n')!==4){
		alert('test main has failed')
	}
	if (main('turn on 1,1 through 2,2\ntoggle 2,2 through 3,3\n')!==6){
		alert('test main has failed')
	}
	console.log('test main is ok');
};	
