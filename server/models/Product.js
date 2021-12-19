const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: String,
	description: String,
	brand: String,
	category: String,
	tags: [String],
	options: [String],
	thumbs: [String], 
	prince: Number,
	offer: Number
})

module.exports = mongoose.model('Product', schema)