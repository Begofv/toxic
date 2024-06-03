import categoryController from "../../controllers/category/categoryController.js";

const getAll= async(req,res)=>{
    const categorias = await categoryController.getAll();
    res.json({data:categorias});
} 

const getById = async (req,res) =>{
    const id = req.params.id
    const category = await categoryController.getById(id);
    res.json({data:category});
}

const create= async(req,res)=>{
    const category = await categoryController.create(req.body);
    res.json({data:category});
}

const remove= async(req,res)=>{
    const id= req.params.id
    const category = await categoryController.remove(id);
    res.json({data:category});
} 
export default {
    getAll,
    getById,
    create,
    remove
}
