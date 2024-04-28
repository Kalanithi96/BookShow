import director from "./../models/director";
import { Request, Response } from "express";

export const getAllDirectors = async (req: Request, res: Response) => {
	
	try{
		const allDirectors = await director.find({})
		res
			.status(200)
			.json({
				message: "All Directors Fetched",
				data: allDirectors
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting directors"
			});
	}
}

export const getAllFilteredDirectors = async (req: Request, res: Response) => {
	
	try{
		const reqBody = req.body;
		const allDirectors = await director.find(reqBody)
		res
			.status(200)
			.json({
				message: "All Directors Fetched based on Filter",
				data: allDirectors
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting directors"
			});
	}
}

export const createNewDirector = async (req: Request, res: Response) => {
	
	const reqBody = req.body;

	try{
		const newDirector = await director.create(reqBody)
		res
			.status(200)
			.json({
				message: "New Director Created"
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in creating director"
			});
	}
}


