import producer from "./../models/producer";
import { Request, Response } from "express";

export const getAllProducers = async (req: Request, res: Response) => {
	
	try{
		const allProducers = await producer.find({})
		res
			.status(200)
			.json({
				message: "All Producers Fetched",
				data: allProducers
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting producers"
			});
	}
}

export const getAllFilteredProducers = async (req: Request, res: Response) => {
	
	try{
		const reqBody = req.body;
		const allProducers = await producer.find(reqBody)
		res
			.status(200)
			.json({
				message: "All Producers Fetched based on Filter",
				data: allProducers
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in getting producers"
			});
	}
}

export const createNewProducer = async (req: Request, res: Response) => {
	
	const reqBody = req.body;

	try{
		const newProducer = await producer.create(reqBody)
		res
			.status(200)
			.json({
				message: "New Producer Created"
			});
	} catch(e){
		res
			.status(400)
			.json({
				message: "Error in creating producer"
			});
	}
}


