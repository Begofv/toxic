 import { useLoaderData } from "react-router-dom";


import './Group.css'
const Group = () => {
    const group = useLoaderData();
    console.log(group);
    
    return(
        <section className="group-card">
            <h2>{group.name}</h2>
            <ul>
                {group.friends.map(user => (
                    <li key={user._id}>{user.username}</li>
                ))}
            </ul>
            
        </section>
    )
}

export default Group