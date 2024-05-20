import mongoose from "mongoose";

const friendsSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
});

const friendsModel = mongoose.model("friends",friendsSchema);

export default friendsModel;