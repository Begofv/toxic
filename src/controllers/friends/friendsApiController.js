import friendsController from "./friendsController.js";

const getAll = async(req,res)=>{
    const friends = await friendsController.getAll();
    res.json({data:friends});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const friend = await friendsController.getById(id);
    res.json({data:friend});
}

const create = async(req,res)=>{
    const friend = await friendsController.create(req.body);
    res.json({data:friend})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const friend = await friendsController.update(id,req.body);
    res.json({data:friend})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const friend = await friendsController.remove(id);
    res.json({data:friend})
}

// const addUser = async(req,res)=>{
//     const friendId = req.params.id;
//     const userId = req.body.userId;
//     const friend = await friendsController.addUser(friendId,userId);
//     res.json({data:friend})
// }

// const removeUser = async(req,res)=>{
//     const friendId = req.params.id;
//     const userId = req.body.userId;
//     const friend = await friendsController.removeUser(friendId,userId);
//     res.json({data:friend})
// }


export default{
    getAll,
    getById,
    create,
    update,
    remove,
    // addUser,
    // removeUser,
}

