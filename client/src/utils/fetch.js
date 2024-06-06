import {getToken} from "./local";

const API_URL = import.meta.env.VITE_BACKEND_URL;   


const fetchData = async(route,method,inputData=null)=>{
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const register = async(userData)=>{
    const result = await fetchData("/register","post",userData);
    return result;
}
const login = async(userData)=>{
    const result = await fetchData("/login","post",userData);
    return result;
}


const getCategories = async()=>{
    const result = await fetchData("/categories","get");
    return result;
}
const createCategory = async(categoryData)=>{
    const result = await fetchData("/categories","post",categoryData);
    return result;
}


const getUsers = async()=>{
    const result = await fetchData("/users","get");
    return result;
}

const createUser = async(userData)=>{
    const result = await fetchData("/users","post",userData);
    return result;
}


const getGroups = async()=>{
    const result = await fetchData("/groups","get");
    return result;
}
const getGroup = async(id)=>{
    const result = await fetchData("/groups/"+id,"get");
    return result;
}

const createGroup = async(groupData)=>{
    const result = await fetchData("/groups","post",groupData);
    return result;
}
export {
    register,
    login,
    getCategories,
    createCategory,
    getUsers,
    createUser,
    getGroups,
    getGroup,
    createGroup
}