import voteController from "../../controllers/vote/voteController.js";

const getAll= async(req,res)=>{
    const votes = await voteController.getAll();
    res.json({data:votes});
} 

const getById = async (req,res) =>{
    const id = req.params.id
    const vote = await voteController.getById(id);
    res.json({data:vote});
}

const create= async(req,res)=>{
    const vote = await voteController.create(req.body);
    res.json({data:vote});
}

const update= async(req,res)=>{
    const id= req.params.id
    const vote = await voteController.update(id,req.body);
    res.json({data:vote});
}

const remove= async(req,res)=>{
    const id= req.params.id
    const vote = await voteController.remove(id);
    res.json({data:vote});
} 

export default {
    getAll,
    create,
    update,
    remove,
    getById,
}