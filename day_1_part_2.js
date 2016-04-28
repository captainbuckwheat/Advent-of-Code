/* REFER TO day_1_data.js for input
Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.
For example:
- ) causes him to enter the basement at character position 1.
- ()()) causes him to enter the basement at character position 5.
What is the position of the character that causes Santa to first enter the basement?
*/

var basement = function(x){
  var x, sum, i; 
  var sum = 0; 
  var i = 0; 
  while (i < x.length){
    if (x[i] === "("){
      sum = sum + 1; 
    } else if (x[i] === ")"){
      sum = sum - 1;
    };
    if (sum === - 1){
      return(i+1);
    } else {
      i = i + 1;
    }
  }
  return(sum); 
}; 

var test = function(){
  if (basement("()())")!==5){
    console.log('test has failed #1');
  } else if (basement(")")!==1){
    console.log('test has failed #2');
  } else {
    console.log('it works like a fkn clock!')
  }
};
