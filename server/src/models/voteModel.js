import mongoose from "mongoose";
//user id no pone porque te lo crea automaticamente
const voteSchema = new mongoose.Schema({
    from :{
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'categories',
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
    group: {
        type: mongoose.Schema.ObjectId,
        ref: 'group',
    },
});


const voteModel = mongoose.model("vote", voteSchema);
export default voteModel;
