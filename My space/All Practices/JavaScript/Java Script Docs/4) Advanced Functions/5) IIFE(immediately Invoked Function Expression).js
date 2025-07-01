/* when u define a function the java Script engine add the function to the global object */

let sum = (function (a, b) {
	return a + b
})(10, 20)
console.log(sum)

/* The following expression is called an immediately invoked function expression (IIFE) because the function is created as an expression and executed immediately: */

/* there can be arrow IIFE function */
/* there can be named IIFE function */
/*IIFE function can also start with semiColon(;)*/
