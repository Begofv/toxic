 import { useLoaderData } from "react-router-dom";
import './Group.css'

const Group = () => {
    const group = useLoaderData();
    const categories = group.categories;
    const votes = group.votes;
    console.log(group);
    
    return(
        <section className="group-card">
            <h2>{group.name}</h2>
            <ul>
                {group.friends.map(user => (
                    <li key={user._id}>{user.username}</li>
                ))}
            </ul>
            
            <div>
                <h3>Categorias</h3>
                <ul>
                    {categories.map(category => (
                        <li key={category._id}>{category.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Votos</h3>
                <ul>
                    {votes.map(vote => (
                    <li key={vote._id}>{vote.value}</li>
                    ))}
                </ul>
            </div>
            
        </section>
    )
}

export default Group