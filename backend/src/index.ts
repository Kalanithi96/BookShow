import express from "express"

const app = express()

app.get('/', (req, res) => {
	console.log(req.body)
	res.send("Hello World")
})

app.listen(3000, ()=>{
	console.log("Connected to Port 3000");
})