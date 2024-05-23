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

// const update = async(id,data) =>{
//     try {
//         await friendsModel.findByIdAndUpdate(id,data);
//         const friend = await friendsModel.findById(id);
//         return friend;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

const remove = async(id) =>{
    try {
        const friend = await friendsModel.findByIdAndDelete(id);
        return friend;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// const addUser = async(friendId,userId) =>{
//     try {
//         const friend = await getById(friendId);
//         if(!friend.users.includes(userId)){
//             friend.users.push(userId);
//             await friend.save();
//             return friend
//         }
//         return friend;
//     } catch (error) {
//         return null;
//     }
// }
// const removeUser = async(friendId,userId)=>{
//     try {
//         console.log("removeUser",friendId,userId)
//         const friend = await getById(friendId);
//         if(friend.users.includes(userId)){
//             friend.users = friend.users.filter(u=> !u.equals(userId));
//             await friend.save();
//             return friend
//         }
//         return friend;
//     } catch (error) {
//         return null;
//     }
// }
// const addTask = async(friendId,taskId) =>{
//     try {
//         const friend = await getById(friendId);
//         if(!friend.tasks.includes(taskId)){
//             friend.tasks.push(taskId);
//             await friend.save();
//             return friend
//         }
//         return friend;
//     } catch (error) {
//         return null;
//     }
// }
// const removeTask = async(friendId,taskId)=>{
//     try {
//         const friend = await getById(friendId);
//         if(friend.tasks.includes(taskId)){
//             friend.tasks = friend.tasks.filter(u=> u!==taskId);
//             await friend.save();
//             return friend
//         }
//         return friend;
//     } catch (error) {
//         return null;
//     }
// }
export const functions = {
    getAll,
    getById,
    create,
    // update,
    remove,
    // addUser,
    // removeUser,
    // addTask,
    // removeTask
}

export default functions;