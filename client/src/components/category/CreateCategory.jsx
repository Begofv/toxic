import { createCategory } from "../../utils/fetch";
import "./CreateCategory.css"
const CreateCategory = ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const data = {name,description};
        console.log("name",data)
        const result = await createCategory(data);
        console.log("result",result)
        onCreate();
    }
    return (
        <form action="" className="create-category" onSubmit={handleSubmit}>
            <label htmlFor="name" >Nombre</label>
            <input type="text" name="name"/>
            <label htmlFor="description" >Descripción</label>
            <textarea name="description"></textarea>
            <button type="submit">Crear</button>
        </form>
    )
}
export default CreateCategory;