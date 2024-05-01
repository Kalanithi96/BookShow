import express from "express";
import {login, register} from "./auth/authController";
import {createNewMovie, getAllFilteredMovies, getAllMovies} from "./db/mongo/controllers/movieController"
import {createNewActor, getAllFilteredActors, getAllActors} from "./db/mongo/controllers/actorController"
import {createNewDirector, getAllFilteredDirectors, getAllDirectors} from "./db/mongo/controllers/directorController"
import {createNewProducer, getAllFilteredProducers, getAllProducers} from "./db/mongo/controllers/producerController"

const router = express.Router();

router
	.post('/auth/login', login)
	.post('/auth/register', register);

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
