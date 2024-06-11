import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'categories'
    },
});

const invitationModel = mongoose.model("invitations",invitationSchema);

export default invitationModel;