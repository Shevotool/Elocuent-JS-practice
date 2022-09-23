/* ***** Functions ***** */

/* ***** Exercise 1 ***** */

/* 
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

If you have trouble putting braces and parentheses in the right place to get a valid function definition, start by copying one of the examples in this chapter and modifying it.

A function may contain multiple return statements.
*/

function min(n, minimum) {
  const number = Math.min(n, minimum);

  if (number === 0 || number) {
    return number;
  }
}

//console.log(min(0, 10));
// → 0
//console.log(min(0, -10));
// → -10
