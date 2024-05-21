import categoryModel from "../../models/categoryModel.js";

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
const create = async(data) =>{
    try {
        const category = await categoryModel.create(data);
        return category;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

//las categorias no se pueden editar, solo crear y borrar por el admin
// const update = async(id,data) =>{
//     try {
//         const oldcategory = await categoryModel.findByIdAndUpdate(id,data);
//         const category = await categoryModel.findById(id);
//         console.log("usurio",category);
//         return user;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

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