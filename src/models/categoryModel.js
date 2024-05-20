import mongoose from "mongoose";
//user id no pone porque te lo crea automaticamente
const categorySchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        unique: true},
});

const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;