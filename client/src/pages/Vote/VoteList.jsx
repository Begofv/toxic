import { useState } from "react";
import {useLoaderData, Link} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateVote from "../../components/vote/CreateVote";
import './Vote.css'

const VoteList = ({}) =>{
    const [votes,setVotes] = useState(useLoaderData());
    const [creatingVote, setCreatingVote] = useState(false);


    const votesHtml = votes.map (vote =>{
        return(
            <Link to ={`/votes/${vote._id}`}>
            <article className="votes-list-element" key={vote._id0} >
                <h3>{vote.name}</h3>
            </article>
            </Link>
        )
    })
    return (
        <> 
          {creatingGroup ?
            <Modal onClose={()=>setCreatingVote(false)}>
               <CreateVote onCreate={()=>setCreatingVote(false)}/>
           </Modal>
           :
           <button onClick={()=>setCreatingVote(true)}>Votar!</button>
            }
               
            <section className="votes-list">
                {votesHtml}
             </section>

        </>
)}

export default VoteList