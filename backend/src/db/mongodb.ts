import * as mongoDb from "mongodb";

const {
	MONGO_USER,
	MONGO_PASSWORD
} = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@nexus.ballmat.mongodb.net/?retryWrites=true&w=majority&appName=Nexus`;

const client : mongoDb.MongoClient = new mongoDb.MongoClient(uri);

async function connectDb() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default connectDb;
