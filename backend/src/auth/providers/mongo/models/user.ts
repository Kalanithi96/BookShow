import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	mobile : String,
	email : String,
	password : String
});

export default mongoose.model("User", userSchema);
