import mongoose from "mongoose";

const friendsSchema = new mongoose.Schema({
    group:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
});

const friendsModel = mongoose.model("friends",friendsSchema);

export default friendsModel;