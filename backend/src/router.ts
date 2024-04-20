import express from "express";
import {AuthService} from "./auth/authService"
import {MongoAuthProvider} from "./auth/providers/mongo/MongoAuthProvider"

const authService = new AuthService(new MongoAuthProvider())

const router = express.Router();

router.post('/auth/login', async (req,res) => { 
	
	const {userId, password} = req.body;
	const response = await authService.login(userId, password);
	res
		.status(response.statusCode)
		.json({
			message: response.message
		})
}).post('/auth/register', async (req,res) => {

	const {userId, password} = req.body;
	const response = await authService.register(userId, password);
	res
		.status(response.statusCode)
		.json({
			message: response.message
		})
})

export default router;
