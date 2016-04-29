/* REFER TO day_2_data.js TO GET THE INPUT
The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.
Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.
For example:
A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?
*/

var min = function(a, b, c) {
  var z; 
  z = a; 
  if (b < z) {
    z = b;
  } else if (c < z) {
    z = c;
  }
  console.log(z);
  return z;
}

var wrapping_area = function(l, w, h) {
  var a, b, c;
  a = 2 * l * w; 
  b = 2 * w * h;
  c = 2 * h * l;
  console.log('c is '+c);
  return (a + b + c + min(a, b, c)/2);
}

var total_paper = function(q) {
  var x, sum, i, boxes, each; 
  sum = 0; 
  i = 0; 
  boxes = q.split(' ');
  while (i < boxes.length) {
    each = boxes[i].split('x');
    x = wrapping_area(each[0], each[1], each[2]);
    sum = sum + x; 
    i = i+1; 
    }
  return sum;
}

var test = function() {
  if (total_paper('2x3x4 1x1x10') !== 101) {
    console.log('test has failed');
  } else {
    console.log('it works like a fkn clock!')
  }
};
