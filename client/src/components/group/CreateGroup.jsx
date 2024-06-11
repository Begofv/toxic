import { createGroup } from "../../utils/fetch";
import "./CreateGroup.css"
const CreateGroup= ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const friends = e.target.friends.value;
        const data = {name,friends};
        const result = await createGroup(data);
        console.log("result",result)
        onCreate();
    }
    return (
        <form action="" className="create-group" onSubmit={handleSubmit}>
            <label htmlFor="name" >Nombre del grupo</label>
            <input type="text" name="name"/>
            <label htmlFor="friends" >Amigo</label>
            <textarea name="friends"></textarea>
            <button type="submit">Crear</button>
        </form>
    )
}
export default CreateGroup;