/* JavaScript specifies the characteristics of properties of objects via internal attributes surrounded by the two pairs of square brackets, e.g., [[Enumerable]].

Objects have two types of properties: data and accessor properties. */

/* 1) Data properties
A data property contains a single location for a data value. A data property has four attributes:

[[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
[[Enumerable]] – indicates if a property can be returned in the for...in loop.
[[Writable]] – specifies that the value of a property can be changed.
[[Value]] – contains the actual value of a property.

By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to true for all properties defined directly on an object. The default value of the[[Value]] attribute is undefined. */

/* 2) Accessor properties
Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.

But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

When you read data from an accessor property, the [[Get]] function is called automatically to return a value. The default return value of the [[Get]] function is undefined.

If you assign a value to an accessor property, the [[Set]] function is called automatically.

To define an accessor property, you must use the Object.defineProperty() method. */

/* 3) Define multiple properties: Object.defineProperties()
In ES5, you can define multiple properties in a single statement using the Object.defineProperties() method. */
var product = {}

Object.defineProperties(product, {
	name: {
		value: "Smartphone",
	},
	price: {
		value: 799,
	},
	tax: {
		value: 0.1,
	},
	netPrice: {
		get: function () {
			return this.price * (1 + this.tax)
		},
	},
})

console.log(
	"The net price of a " +
		product.name +
		" is " +
		product.netPrice.toFixed(2) +
		" USD"
)
