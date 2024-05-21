import voteModel from "../../models/voteModel.js";

const getAll = async()=> {
    try {
        const votes = await userModel.find();
        return votes;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const vote = await voteModel.findById(id);
        return vote;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const create = async(data) =>{
    try {
        const vote = await voteModel.create(data);
        return vote;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const vote = await voteModel.findByIdAndUpdate(id,data);
        return vote;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const vote = await voteModel.findByIdAndDelete(id);
        return vote;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;