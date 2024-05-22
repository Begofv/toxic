import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import categoryController from "../../src/controllers/category/categoryController.js";

const categoryData = {
    name:"nombre",
    description:"descripcion",
}

describe("Test de categoryController",()=>{
    
    beforeAll(async ()=>{
        await connectDB();
        try {
            await mongoose.connection.collections["category"].drop();            
        } catch (error) {          
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir categorias",async()=>{
        const category = await categoryController.create(categoryData);
        expect(category.name).toEqual(categoryData.name);
        expect(category.description).toEqual(categoryData.description);
    })
  
    test("buscar categorias por id",async()=>{
        const newcategory = await categoryController.getById(categorys._id);
        expect(newcategory).not.toBeNull();
        expect(newcategory.name).toEqual(categoryData.name);
        expect(newcategory.description).toEqual(categoryData.description);
    })
    
})