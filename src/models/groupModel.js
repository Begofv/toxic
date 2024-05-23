import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    friends: [{
        type: [mongoose.Schema.ObjectId],
        ref: "user"
    }]
});

const groupModel = mongoose.model("group",groupSchema);

export default groupModel;