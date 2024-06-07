import { useLoaderData } from "react-router-dom";
import './Vote.css'

const Vote = () => {
    const vote = useLoaderData();
    console.log(group);
    
    return(
        <section className="vote-card">
            <h2>Votos</h2>
            <ul>
                {vote.from.map(user => (
                    <li key={user._id}>{user.username}</li>
                ))}
            </ul>
            <ul>
                {vote.category.map(category => (
                    <li key={category._id}>{category.name}</li>
                ))}
            </ul>
            <ul>
                {vote.to.map(user => (
                    <li key={user._id}>{user.username}</li>
                ))}
            </ul>
            <ul>
                {vote.group.map(group => (
                    <li key={group._id}>{group.name}</li>
                ))}
            </ul>
            
        </section>
    )
}

export default Vote

