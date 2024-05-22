import categoryModel from "../../models/categoryModel.js";
import userModel from "../../models/userModel.js";
import userController from "../user/userController.js";

const getAll = async()=> {
    try {
        const categorys = await categoryModel.find();
        return categorys;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const category = await categoryModel.findById(id);
        return category;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

//las categorias no se pueden editar, solo crear y borrar por el admin

const create = async(data) =>{
   try {
       const category = await categoryModel.create(data);
       category.users.push(data.owner);
       await category.save();
       await userController.addCategory(data.owner,category._id);
       return category;
   } catch (error) {
       console.error(error); 
        return null;  
    }
}

const remove = async(id) =>{
    try {
        const category = await categoryModel.findByIdAndDelete(id);
        return category;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    create,
    remove
}

export default functions;