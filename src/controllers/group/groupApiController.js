import groupController from "./groupController.js";

const getAll = async(req,res)=>{
    const group = await groupController.getAll();
    res.json({data:group});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const group = await groupController.getById(id);
    res.json({data:group});
}

const create = async(req,res)=>{
    const group = await groupController.create(req.body);
    const userId = req.user._id;
    await groupController.addFriend(group._id,userId);
    res.json({data:group})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const group = await groupController.update(id,req.body);
    res.json({data:group})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const group = await groupController.remove(id);
    res.json({data:group})
}

const addFriend = async(req,res)=>{
    const groupId = req.params.id;
    const userId = req.body.userId;
    const group = await groupController.addFriend(groupId,userId);
    res.json({data:group})
}


export default{
    getAll,
    getById,
    create,
    update,
    remove,
    addFriend
    
}

