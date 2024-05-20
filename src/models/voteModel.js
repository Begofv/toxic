import mongoose from "mongoose";
//user id no pone porque te lo crea automaticamente
const voteSchema = new mongoose.Schema({
    from :{
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        unique: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        unique: true
    },
});


const voteModel = mongoose.model("Vote", voteSchema);
export default voteModel;
