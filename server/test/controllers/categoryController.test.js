// import connectDB from "../../src/config/mongo.js";
// import mongoose from 'mongoose';
// import categoryController from "../../src/controllers/category/categoryController.js";
// import userController from "../../src/controllers/user/userController.js"

// let categoryId = null;
// let userId = null;
// let newUser;
// describe("Test de categoryController",()=>{
//     beforeAll(async ()=>{
//         await connectDB();
//         try{
//             await mongoose.connection.collections["categories"].drop();
//             newUser = await userController.getByProperty("email","mail");
//             if(!newUser){
//                 newUser = await userController.create({username:"algo",email:"mail",password:"1234"});
//             }
//         }
//         catch(error){
//             console.error(error);
//         }
//     })
//     afterAll(async()=>{
//         await mongoose.connection.close();
//     })

//     test("Crear categorias",async()=>{
//         const categories = await categoryController.getAll();
//         const categoryData = {
//             name: "pruebas",
//             description: "descripcion",
            
//         }
//         const category = await categoryController.create(categoryData)
//         categoryId = category._id;
//         expect(category).not.toBeNull();
//         expect(category.owner).toEqual(categories[0]._id);
//     })

//     test("Borrar categoria",async()=>{
//         const category = await categoryController.remove(categoryId);
//         expect(category).not.toBeNull();
//     })
// })