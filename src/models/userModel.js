import mongoose from "mongoose";

//user id no pone porque te lo crea automaticamente
const userSchema = new mongoose.Schema({
    email :{
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],//solo puede ser user o admin
        default: "user"
    },
    vote:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'vote',
        }
    ]
});

const userModel = mongoose.model("user", userSchema);
export default userModel;