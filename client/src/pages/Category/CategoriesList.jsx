
const CategoriesList = ({categories}) =>{
    const categoriesHtml = categories.map (category =>{
        return(
            <article className="categories-list-element" key={category._id}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
            </article>
        )
    })
    return (
        <section className="categories-list">
            {categoriesHtml}
        </section>
)}

export default CategoriesList