import mongoose from "mongoose"

const {
	MONGO_USER,
	MONGO_PASSWORD
} = process.env;


async function connectDb(db? : string) {

	const mongoURL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@nexus.ballmat.mongodb.net/${db}?retryWrites=true&w=majority&appName=Nexus`

	return mongoose.connect(mongoURL)
		.then(() => console.log("Successfully connected"))
		.catch((e) => {
			console.log(e)
			// setTimeout(connectDb, 5000)
		});
}

export default connectDb;
