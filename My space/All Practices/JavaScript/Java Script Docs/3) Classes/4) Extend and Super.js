/* The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords */

class Animal {
	constructor(legs) {
		this.legs = legs
	}
	walk() {
		console.log(`Animal Walking on ${this.legs} legs`)
	}
}

class Birds extends Animal {
	constructor(legs) {
		super(legs)
	}
	fly() {
		console.log(`${this.legs}flying`)
	}
}
/* JavaScript requires the child class to call super() if it has parent class has a constructor. As you can see in the Bird class, the super(legs) is equivalent to the following statement in ES5: */
let bird = new Birds(2)
bird.fly()

/* Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor. */
