import connectDB from "../../src/config/mongo.js";
import userModel from "../../src/models/userModel.js";
import mongoose from "mongoose";


const userData = { 
    email: "mimail@mail.com", 
    username: "usuario",
    password: "1234",
    role: "admin"
};

describe("tests de modelo de usuario", () => {
    beforeAll( async() => {
        await connectDB();
        await userModel.conection.collection["users"].drop();     
})
    afterAll( async() => {
        await mongoose.connection.close();
})
    test ("añadir registro", async () => {
        const newModel = await userModel.create(userData);
        expect(newModel.email).toEqual(userData.email);
        expect (newModel.username).toEqual(userData.username);
        expect (newModel.role).toEqual(userData.role);
    }) 
    test ("buscar usuario", async () => {
        const newUser = await userModel.findOne({email:userData.email});
        expect(newUser).not.toBeNull();
        expect(newModel.email).toEqual(userData.email);
        expect (newModel.username).toEqual(userData.username);
        expect (newModel.role).toEqual(userData.role);
    })
    test("rol de usuario", async () => {
        const userData2= {
            email: "algo@mail.com", 
            username: "username",
            password: "password",
        }
        const newUser = await userModel.create(userData2c);
        expect(newUser.role).toEqual("user");
        userData2.role="otro";
        await expect(userModel.create(userData2)).rejects.toThrow();
    })
 });