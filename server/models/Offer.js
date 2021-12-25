const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	link: String,
	image: String
})

module.exports = mongoose.model('Offer', schema, 'offers')