import {AuthService} from "./authService"
import {MongoAuthProvider} from "./providers/mongo/MongoAuthProvider"
import { Request, Response } from "express";

const authService = new AuthService(new MongoAuthProvider())

export const login = async (req: Request,res: Response) => { 
	
	const {userId, password} = req.body;
	const response = await authService.login(userId, password);
	res
		.status(response.statusCode)
		.json({
			message: response.message
		})
}

export const register = async (req: Request,res: Response) => {

	const {userId, password} = req.body;
	const response = await authService.register(userId, password);
	res
		.status(response.statusCode)
		.json({
			message: response.message
		})
}
