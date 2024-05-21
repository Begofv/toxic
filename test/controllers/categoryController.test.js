import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import categoryController from "../../src/controllers/category/categoryController.js";


const categoryData = {
    name:"categoria",
    description:"descripcion",
}

describe("Test de categoryController",()=>{
    beforeAll(async ()=>{
        await connectDB();
        try{
            await mongoose.connection.collections["categorys"].drop();
        }catch(error){
            
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir categoria",async()=>{
        const category = await categoryController.create(categoryData);
        expect(category.name).toEqual(categoryData.name);
        expect(category.description).toEqual(categoryData.description);
    })
    
    // test("buscar categoria por propiedad",async()=>{
    //     const categorys= await categoryController.getByProperty("name","categoria");
    //     expect(categorys.length).toBeGreaterThanOrEqual(1);
    //     const category = categorys[0];
    //     console.log("category",category);
    //     expect(category.name).toEqual(categoryData.name);
    //     expect(category.description).toEqual(categoryData.description);

    // })
    // test("buscar categoria por id",async()=>{
    //     const categorys= await categoryController.getByProperty("email","mimail@mail.com");
    //     const newcategory = await categoryController.getById(categorys[0]._id);
    //     expect(newcategory).not.toBeNull();
    //     expect(newcategory.email).toEqual(categoryData.email);
    //     expect(newcategory.categoryname).toEqual(categoryData.categoryname);
    //     expect(newcategory.role).toEqual(categoryData.role);
    // })
    
})