import express from "express";
import {AuthService} from "./auth/authService"
import {MongoAuthProvider} from "./auth/providers/mongo/MongoAuthProvider"
import {createNewMovie, getAllFilteredMovies, getAllMovies} from "./db/mongo/controllers/movieController"

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

router
	.post('/db/movie', createNewMovie)
	.get('/db/movie', getAllMovies)
	.post('/db/movie/filter', getAllFilteredMovies);

export default router;
