import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: Array,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	subCategory: {
		type: String,
		required: true,
	},
	sizes: {
		type: Array,
		required: true,
	},
	bestseller: {
		type: Boolean,
		required: true,
	},
	Date: {
		type: Number,
		required: true,
	},
})

export const productModel =
	mongoose.models.product || mongoose.model("product", productSchema)
