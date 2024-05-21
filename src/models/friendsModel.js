import mongoose from "mongoose";

const friendsSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    friends: {
        type: [mongoose.Schema.ObjectId],
        ref: "user"
    }
});

const friendsModel = mongoose.model("friends",friendsSchema);

export default friendsModel;