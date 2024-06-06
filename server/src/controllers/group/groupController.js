import groupModel from "../../models/groupModel.js";

const getAll = async()=> {
    try {
        const friends = await groupModel.find();
        return friends;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id, populate = true)=>{
    try {
        const friend = await groupModel.findById(id);
        if (populate) {
            await friend.populate("friends");
        }
        return friend;
    } catch (error) {
        console.error(error);
        return null;     
    }
}

const create = async(data) =>{
    try {
        const friend = await groupModel.create(data);
        return friend;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const remove = async(id) =>{
    try {
        const friend = await groupModel.findByIdAndDelete(id);
        return friend;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const addFriend = async(groupId,userId) =>{
    try {
        const group = await getById(groupId,false);
        if(!group.friends.includes(userId)){
            group.friends.push(userId);
            await group.save();
            return group
        }
        return group;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export const functions = {
    getAll,
    getById,
    create,
    remove,
    addFriend
}

export default functions;