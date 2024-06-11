import './Category.css'
const Category = ({category}) => {
    
    return(
        <section className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            
        </section>
    )
}

export default Category