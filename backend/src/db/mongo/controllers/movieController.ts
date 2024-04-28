import movie from "./../models/movie";
import { Request, Response } from "express";

export const getAllMovies = async (req: Request, res: Response) => {
	
	try{
		const allMovies = await movie.find({})
		res
			.status(200)
			.json({
				message: "All Movies Fetched",
				data: allMovies
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting movies"
			});
	}
}

export const getAllFilteredMovies = async (req: Request, res: Response) => {
	
	try{
		const reqBody = req.body;
		const allMovies = await movie.find(reqBody)
		res
			.status(200)
			.json({
				message: "All Movies Fetched based on Filter",
				data: allMovies
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting movies"
			});
	}
}

export const createNewMovie = async (req: Request, res: Response) => {
	
	const reqBody = req.body;

	console.log(reqBody);

	try{
		const newMovie = await movie.create(reqBody)
		res
			.status(200)
			.json({
				message: "New Movie Created"
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in creating movie"
			});
	}
}


