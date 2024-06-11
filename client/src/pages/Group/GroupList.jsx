import { useState } from "react";
import {useLoaderData, Link} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateGroup from "../../components/group/CreateGroup";
import './Group.css'

const GroupList = ({}) =>{
    const [groups,setGroups] = useState(useLoaderData());
    const [creatingGroup, setCreatingGroup] = useState(false);


    const groupsHtml = groups.map (group =>{
        return(
            <Link to ={`/groups/${group._id}`}>
            <article className="groups-list-element" key={group._id0} >
                <h3>{group.name}</h3>
            </article>
            </Link>
        )
    })
    return (
        <>
        {creatingGroup ?
            <Modal onClose={()=>setCreatingGroup(false)}>
               <CreateGroup onCreate={()=>setCreatingGroup(false)}/>
           </Modal>
           :
           <button onClick={()=>setCreatingGroup(true)}>Nuevo grupo</button>
       }
            
        <section className="groups-list">
            {groupsHtml}
        </section>

        </>
)}

export default GroupList