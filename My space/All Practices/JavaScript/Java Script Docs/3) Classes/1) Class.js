/* Before ES6, JavaScript had no concept of classes. To mimic a class, you often use the constructor/prototype pattern  */

/* ES6 introduced a new syntax for declaring a class as shown in this example: */
class Person {
	constructor(name) {
		this.name = name
	}
	getName() {
		return this.name
	}
}
