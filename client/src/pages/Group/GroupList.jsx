import { useState } from "react";
import {useLoaderData} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateGroup from "../../components/group/CreateGroup";
import './Group.css'

const GroupList = ({}) =>{
    const groups = useLoaderData();
    const [creatingGroup, setCreatingGroup] = useState(false);
    const [selectGroup, setSelectGroup] = useState(null);

    const hanleGroupClick = (group) =>{
        setSelectGroup(group)
    };

    const groupsHtml = groups.map (group =>{
        return(
            <article className="groups-list-element" key={group._id0} onClick={()=>hanleGroupClick(group)}>
                <h3>{group.name}</h3>
            </article>
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

        {selectGroup && 
            <Modal onClose={()=>setSelectGroup(null)}>
                <h2>{selectGroup.name}</h2>
                <p>{selectGroup.friends}</p>
            </Modal>
        }
        </>
)}

export default GroupList