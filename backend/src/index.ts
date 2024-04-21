import express from "express"
import dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config();
import connectDb from "./db/mongo/mongodb";
import router from "./router";

export const app = express();
app.use(bodyParser.json());

connectDb(process.env.ENV).catch(console.dir);

app.get('/', (req, res) => {
	console.log(req.body)
	res.send("Hello World")
})

app.use("/api/v1", router);

export const server = app.listen(3000, ()=>{
	console.log("Connected to Port 3000");
})
