class pizza {
	constructor(pizzaType, pizzaSize) {
		this.type = pizzaType
		this.size = pizzaSize
		this.crust = "original"
	}
	bake() {
		console.log(
			`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`
		)
	}
}

const myPizza = new pizza("pepperoni", "small")
myPizza.bake()

/* GETTER AND SETTER  */
