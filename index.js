import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Food from './models/Food.js'
import Order from './models/Order.js'

const app = express()

mongoose
	.connect('mongodb+srv://admin:admin@fooddelivery.lnqremv.mongodb.net/')
	.then(() => console.log('DB OK'))
	.catch(() => console.log('DB ERROR'))

app.get("/", (req, res)=> {
    res.send("Hello world")
})

app.use(cors())
app.use(express.json())

app.listen(8000, () => {
	console.log('Server is running')
})

app.post('/food', async (req, res)=> {
	const newFood = new Food(req.body)
	try {
		const savedFood = await newFood.save()
		res.status(200).json(savedFood)
	} catch (error) {
		console.log(error)
		res.status(500).json({message:error})
	}
})

app.get('/food', async (req,res)=> {
	const {shop} = req.query
	try {
		const kfc = await Food.find({storeName: shop})
		res.status(200).json(kfc)
	} catch (error) {
		res.status(500).json({message:error})
	}
})

app.post('/order', async (req, res) => {
	const newFood = new Order(req.body)
	try {
		const savedOrder = await newFood.save()
		res.status(200).json(savedOrder)
	} catch (error) {
		console.log(error)
		res.status(500).json({message:error})
	}
})

