import actor from "./../models/actor";
import { Request, Response } from "express";

export const getAllActors = async (req: Request, res: Response) => {
	
	try{
		const allActors = await actor.find({})
		res
			.status(200)
			.json({
				message: "All Actors Fetched",
				data: allActors
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting actors"
			});
	}
}

export const getAllFilteredActors = async (req: Request, res: Response) => {
	
	try{
		const reqBody = req.body;
		const allActors = await actor.find(reqBody)
		res
			.status(200)
			.json({
				message: "All Actors Fetched based on Filter",
				data: allActors
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting actors"
			});
	}
}

export const createNewActor = async (req: Request, res: Response) => {
	
	const reqBody = req.body;

	try{
		const newActor = await actor.create(reqBody)
		res
			.status(200)
			.json({
				message: "New Actor Created"
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in creating actor"
			});
	}
}


