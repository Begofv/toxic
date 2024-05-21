import categoryController from "../../controllers/category/categoryController.js";

const getAll= async(req,res)=>{
    const categorias = await voteController.getAll();
    res.json({data:categorias});
} 

const getById = async (req,res) =>{
    const id = req.params.id
    const category = await categoryController.getById(id);
    res.json({data:category});
}

const create= async(req,res)=>{
    const vote = await voteController.create(req.body);
    res.json({data:vote});
}

const remove= async(req,res)=>{
    const id= req.params.id
    const vote = await voteController.remove(id);
    res.json({data:vote});
} 
export default {
    getAll,
    getById,
    create,
    remove
}