import mongoose from "mongoose"

const schema = mongoose.Schema;

const movieSchema = new schema({
	name: {
        type:String,
        required:true,
    },
	language: {
		type:String,
		required:true
	},
	duration:{
		type:Number,
		required:true
	},
    year:{
        type:String,
        required:true
    },
	directors:{
		type:[schema.Types.ObjectId],
		ref: "director",
		required:true
	},
    actors:{
		type:[schema.Types.ObjectId],
		ref: "actor",
		required:true
	},
	producer:{
		type:[schema.Types.ObjectId],
		ref: "producer",
		required:true
	},
	plot:{
		type:String,
		required:true
	}
});

export default mongoose.model("movie", movieSchema);
