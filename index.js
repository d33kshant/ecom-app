require('dotenv').config()

const PORT = process.env.PORT || 5000

const mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt')
const path = require('path')

const User = require('./models/User')
const Product = require('./models/Product')
const app = express()

app.use(express.json())
app.use(express.static('./client/build'))

app.post('/login', async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })
	
	if (user) {
		bcrypt.compare(password, user.password, (err, result) => {
			if (result) {
				res.json({
					email: user.email,
					name: user.name
				})
			} else {
				res.status(400).json({ error: "Invalid email or password." })
			}
		})
	} else {
		res.status(400).json({ error: "Invalid email or password." })
	}
})

app.post('/signup', async (req, res) => {
	const { name, email, password } = req.body
	const hash = await bcrypt.hash(password, 5)
	
	const user = await User.findOne({ email })
	if (!user) {
		user = new User({ name, email, password: hash })
		user.save().then(doc => {
			res.json({ result: "Signed up successfully." })
		}).catch(err => {
			res.json({ error: "Failed to sign up." })
		})
	} else {
		res.json({ error: "Email already registred." })
	}
})

app.get('/api/v1/product/:id', async (req, res) => {
	const id = req.params.id
	if (id) {
		const product = await Product.findById(id)
		if (product) {
			res.json(product)
		} else {
			res.json({
				error: "Invalid product id."
			})
		}
	} else {
		res.json({
			error: "Product id is required."
		})
	}
})

app.post('/api/v1/product', async (req, res) => {
	const product = new Product(req.body)
	await product.save()
	res.json({ result: "Saved" })
})

app.get('/api/v1/products', async (req, res) => {
	// const { cat: category, sort } = req.query
	const products = await Product.find({}).limit(10)
	res.json(products)
})

app.get('/api/v1/search', async (req, res) => {
	const { query, sort } = req.query
	const _sort = sort === 'desc' ? { rate: -1 } : { rate: 1 }
	
	const products = await Product.aggregate([{
		$search: {
			index: 'default',
			text: {
				query: query,
				path: {
					wildcard: '*'
				}
			}
		}
	}]).sort(_sort)
	res.json(products)
})

app.get('*', (req, res)=>{
	res.sendFile('index.html', { root: path.join(__dirname, 'client', 'build') });
});

mongoose.connect(process.env.DB_URI, {}, () => {
	console.log('Connected to database successfully.')
	app.listen(PORT, _ => console.log('Server listening on port:', PORT))
})