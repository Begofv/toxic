import categoryModel from "../../models/categoryModel.js";

const getAll = async()=> {
    try {
        const category = await categoryModel.find();
        return category;
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

const update = async(id,data) =>{
    try {
        const category = await categoryModel.findByIdAndUpdate(id,data);
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
const addUser = async(categoryId,userId) =>{
    try {
        const category = await getById(categoryId);
        if(!category.users.includes(userId)){
            category.users.push(userId);
            await category.save();
            return category
        }
        return category;
    } catch (error) {
        return null;
    }
}
const removeUser = async(categoryId,userId)=>{
    try {
        const category = await getById(categoryId);
        if(category.users.includes(userId)){
            category.users = category.users.filter(u=> u!==userId);
            await category.save();
            return category
        }
        return category;
    } catch (error) {
        return null;
    }
}
export const functions = {
    getAll,
    getById,
    create,
    update,
    remove,
    addUser,
    removeUser,
}

export default functions;