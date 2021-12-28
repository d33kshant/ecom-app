const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: String,
	description: String,
	brand: String,
	category: String,
	options: [String],
	thumbs: [String], 
	price: Number,
	rate: Number
})

module.exports = mongoose.model('Product', schema)