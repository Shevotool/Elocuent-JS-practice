/* ***** Higher-Order Functions ***** */

/* ***** Exercise 1 ***** */

/* 
Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. 
*/

let arrays = [[1, 2, 3], [4, 5], [6]].reduce(
  (previousValue, currentVale) => previousValue.concat(currentVale),
  []
);

//console.log(arrays);
//[1, 2, 3, 4, 5, 6]
