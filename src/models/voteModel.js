import mongoose from "mongoose";
//user id no pone porque te lo crea automaticamente
const voteSchema = new mongoose.Schema({
    from :{
        type: mongoose.Schema.ObjectId,
        ref: 'users',
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'category',
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
    },
    group: {
        type: mongoose.Schema.ObjectId,
        ref: 'group',
    },
});


const voteModel = mongoose.model("vote", voteSchema);
export default voteModel;
