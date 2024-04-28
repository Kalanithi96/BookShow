import mongoose from "mongoose"

const schema = mongoose.Schema;

const producerSchema = new schema({
	name: {
        type:String,
        required:true,
    },
	movies:{
		type:[schema.Types.ObjectId],
		ref: "movie",
		required:true
	}
});

export default mongoose.model("producer", producerSchema);
