import { useState } from "react";
import { createVote } from "../../utils/fetch";
import "./CreateVote.css"
const CreateVote = ({ group }) => {
    const [votes, setVotes] = useState({});
    const categories = group.categories
    const friends = group.friends
    const handelSelect = (categoryId, userId) => {
        if (userId == "") {
            if (votes[categoryId]) {
                const newVotes = { ...votes };
                delete newVotes[categoryId];
                setVotes(newVotes);
            }

            return
        };

        setVotes({ ...votes, [categoryId]: userId });

    }
    const isVoteComplete = () => {
        return Object.values(votes).length == categories.length
    }
    const handelCreateVote = async (categoryId,friendId) =>{
        const data = {
            group: group._id,
            category: categoryId,
            to: friendId
        }
        await createVote(data)
    }
    const handelSubmit = async () => {
        for (const [categoryId, friendId] of Object.entries(votes)) {
            await handelCreateVote(categoryId, friendId)
        }
    }
    
    return (
        <>
            {categories.map(category => (
                <div key={category._id}>
                    <h3>{category.name}</h3>
                    <select onChange={(e) => handelSelect(category._id, e.target.value)} name="to">
                        <option value="">seleccionar</option>
                        {friends.map(friend => (
                            <option key={friend._id} value={friend._id}>{friend.username}</option>
                        ))}
                    </select>
                </div>
            ))}

            <button disabled={!isVoteComplete()} onClick={() => handelSubmit()}>Votar</button>
        </>

    )
}
export default CreateVote;