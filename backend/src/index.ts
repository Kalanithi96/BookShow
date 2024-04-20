import express from "express"
import dotenv from 'dotenv';
dotenv.config();
import connectDb from "./db/mongo/mongodb";
import router from "./router";

const app = express()

connectDb().catch(console.dir);

app.get('/', (req, res) => {
	console.log(req.body)
	res.send("Hello World")
})

app.use("/api/v1", router);

app.listen(3000, ()=>{
	console.log("Connected to Port 3000");
})
