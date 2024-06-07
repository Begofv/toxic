import voteModel from "../../models/voteModel.js";

const getAll = async()=> {
    try {
        const votes = await voteModel.find();
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

const getByGroup = async(property,value) =>{
    try {
        console.log("property",property)
        console.log("value",value)
        const votes = await voteModel.find({[property]:value})
        const populatevotes = await Promise.all(votes.map(async (vote) => {
            await vote.populate({
                path:"to",
                select: { username:1, email:1, role:1 }
            });
            await vote.populate({
                path:"from",
                select: { username:1, email:1, role:1 }
            });
            await vote.populate({
                path:"category"

            });
            await vote.populate({
                path:"group"

            });
            return vote;
        }))
        return populatevotes;
    } catch (error) {
        console.error(error)
        return null;
    }
}
export const functions = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByGroup
}

export default functions;