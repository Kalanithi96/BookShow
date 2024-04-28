import express from "express";
import {AuthService} from "./auth/authService"
import {MongoAuthProvider} from "./auth/providers/mongo/MongoAuthProvider"
import {createNewMovie, getAllFilteredMovies, getAllMovies} from "./db/mongo/controllers/movieController"
import {createNewActor, getAllFilteredActors, getAllActors} from "./db/mongo/controllers/actorController"
import {createNewDirector, getAllFilteredDirectors, getAllDirectors} from "./db/mongo/controllers/directorController"
import {createNewProducer, getAllFilteredProducers, getAllProducers} from "./db/mongo/controllers/producerController"

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
router
	.post('/db/actor', createNewActor)
	.get('/db/actor', getAllActors)
	.post('/db/actor/filter', getAllFilteredActors);
router
	.post('/db/director', createNewDirector)
	.get('/db/director', getAllDirectors)
	.post('/db/director/filter', getAllFilteredDirectors);
router
	.post('/db/producer', createNewProducer)
	.get('/db/producer', getAllProducers)
	.post('/db/producer/filter', getAllFilteredProducers);

export default router;
