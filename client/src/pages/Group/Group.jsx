import './Group.css'
const Group = ({group}) => {
    
    return(
        <section className="group-card">
            <h2>{group.name}</h2>
            <p>{group.friends}</p>
            
        </section>
    )
}

export default Group