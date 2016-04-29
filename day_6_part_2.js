/*
You just finish implementing your winning light pattern when you realize you mistranslated Santa's message from Ancient Nordic Elvish.

The light grid you bought actually has individual brightness controls; each light can have a brightness of zero or more. The lights all start at zero.

The phrase turn on actually means that you should increase the brightness of those lights by 1.

The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.

The phrase toggle actually means that you should increase the brightness of those lights by 2.

What is the total brightness of all lights combined after following Santa's instructions?

For example:

turn on 0,0 through 0,0 would increase the total brightness by 1.
toggle 0,0 through 999,999 would increase the total brightness by 2000000.
*/

var empty_grid = function(x_size, y_size) {
  var grid, j, i;
  grid = [];
  for (i = 0; i <= y_size; i++) {
    grid[i] = [];
    for (j = 0; j <= x_size; j++) { grid[i][j] = 0; }
  }
  return grid;
};

var parse_instr = function(s) {
  var string, k, first_xy, first_x, first_y, second_xy, second_x, second_y, instr;
  string = s.split(" ");
  instr = [];
  if (string.length === 5) {
    k = 2;
  } else if (string.length === 4) {
    k = 1;
  } else if (string.length === 0) {
    console.log("I told you so!")
  }
  first_xy = string[k];
  first_xy = first_xy.split(",");
  first_x  = +first_xy[0];
  first_y = +first_xy[1];
  second_xy = string[k + 2];
  second_xy = second_xy.split(",");
  second_x  = +second_xy[0];
  second_y = +second_xy[1];
  instr[0] = string[k - 1];
  instr[1] = first_x;
  instr[2] = first_y;
  instr[3] = second_x;
  instr[4] = second_y;
  return instr;
};


var execute_instr = function(grid, instr) {
  var op, x1, y1, x2, y2, i, j;
  op = instr[0];
  x1 = instr[1];
  y1 = instr[2];
  x2 = instr[3];
  y2 = instr[4];
  if (op === "on") {
    for (i = y1; i < (y2 + 1); i++) {
      for (j = x1; j < (x2 + 1); j++) { grid[i][j] = grid[i][j] + 1; }
    }
  } else if (op === "off") {
    for (i = y1; i < (y2 + 1); i++) {
      for (j = x1; j < (x2 + 1); j++) {
        if (grid[i][j] > 0) {
          grid[i][j] = grid[i][j] - 1;
        } else {
          grid[i][j] = 0;
        }
      }
    }
  } else if (op === "toggle") {
    for (i = y1; i < (y2 + 1); i++) {
      for (j = x1; j < (x2 + 1); j++) grid[i][j] = grid[i][j] + 2;
    }
  }
  return grid;
};


var count_on = function(grid) {
  var count, i;
  count = 0;
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) count = count + grid[i][j]; 
  }
  return count;
};

var convert_to_lines = function(a) {
  var line = a.split("\n");
  return line;
}

var main = function(s) {
  var a, i, grid, instr;
  grid = empty_grid(999, 999);
  a = convert_to_lines(s);
  for (i = 0; i < a.length; i++) {
    instr = parse_instr(a[i]);
    grid  = execute_instr(grid, instr);
  }
  return count_on(grid);
}


var test_main = function() {
  if (main("turn on 0,0 through 0,0") !== 1) { alert("test main has failed");
  } else if (main("toggle 0,0 through 999,999") !== 2000000) { alert("test main has failed") 
  } else console.log("main() works like a fkn clock!");
};
