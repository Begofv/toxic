import mongoose from "mongoose";
//user id no pone porque te lo crea automaticamente
const categorySchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        unique: true
    },
    description: String,
});

const categoryModel = mongoose.model("categories", categorySchema);
export default categoryModel;