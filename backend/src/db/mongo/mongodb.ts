import mongoose from "mongoose"

const {
	MONGO_USER,
	MONGO_PASSWORD
} = process.env;

const mongoURL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@nexus.ballmat.mongodb.net/?retryWrites=true&w=majority&appName=Nexus`

async function connectDb() {
  return mongoose.connect(mongoURL)
    .then(() => console.log("Successfully connected"))
    .catch((e) => {
        console.log(e)
        // setTimeout(connectDb, 5000)
    });
}

export default connectDb;
