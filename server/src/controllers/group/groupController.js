import friendsModel from "../../models/groupModel.js";

const getAll = async()=> {
    try {
        const friends = await friendsModel.find();
        return friends;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const friend = await friendsModel.findById(id);
        return friend;
    } catch (error) {
        console.error(error);
        return null;     
    }
}

const create = async(data) =>{
    try {
        const friend = await friendsModel.create(data);
        return friend;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const remove = async(id) =>{
    try {
        const friend = await friendsModel.findByIdAndDelete(id);
        return friend;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const addFriend = async(groupId,userId) =>{
    try {
        const group = await getById(groupId);
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