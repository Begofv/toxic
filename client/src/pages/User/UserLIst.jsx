import { useState } from "react";
import {useLoaderData} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateUser from "../../components/user/CreateUser";
import './User.css'

const UsersList = ({}) =>{
    const users = useLoaderData();
    const [creatingUser, setCreatingUser] = useState(false);
    const [selectUser, setSelectUser] = useState(null);

    const hanleUserClick = (user) =>{
        setSelectUser(user)
    };

    const usersHtml = users.map (user =>{
        return(
            <article className="user-list-element" key={user._id0} onClick={()=>hanleUserClick(user)}>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
            </article>
        )
    })
    return (
        <>
        {creatingUser ?
            <Modal onClose={()=>setCreatingUser(false)}>
               <CreateUser onCreate={()=>setCreatingUser(false)}/>
           </Modal>
           :
           <button onClick={()=>setCreatingUser(true)}>Nuevo Usuario</button>
       }
            
        <section className="users-list">
            {usersHtml}
        </section>

        {selectUser && 
            <Modal onClose={()=>setSelectUser(null)}>
                <h2>{selectUser.name}</h2>
                <p>{selectUser.description}</p>
            </Modal>
        }
        </>
)}

export default UsersList