import mongoose from "mongoose"

const schema = mongoose.Schema;

const directorSchema = new schema({
	name: {
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true
    },
	sex:{
		type:String,
		required:true
	},
    movies:{
		type:[schema.Types.ObjectId],
		ref: "movie",
		required:true
	}
});

export default mongoose.model("director", directorSchema);
