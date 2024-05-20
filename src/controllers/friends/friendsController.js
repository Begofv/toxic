import friendsModel from "../../models/friendsModel.js";

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
        const friends = await friendsModel.findById(id);
        return friends;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const create = async(data) =>{
    try {
        const friends = await friendsModel.create(data);
        return friends;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const friends = await friendsModel.findByIdAndUpdate(id,data);
        return friends;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const friends = await friendsModel.findByIdAndDelete(id);
        return friends;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(friendsId,userId) =>{
    try {
        const friends = await getById(friendsId);
        if(!friends.users.includes(userId)){
            friends.users.push(userId);
            await friends.save();
            return friends
        }
        return friends;
    } catch (error) {
        return null;
    }
}
const removeUser = async(friendsId,userId)=>{
    try {
        const friends = await getById(friendsId);
        if(friends.users.includes(userId)){
            friends.users = friends.users.filter(u=> u!==userId);
            await friends.save();
            return friends
        }
        return friends;
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