import { useState } from "react";
import Modal from "../../components/modal/Modal";
import CreateCategory from "../../components/category/CreateCategory";
import './Category.css'

const CategoriesList = ({categories}) =>{
    const [creatingCategory, setCreatingCategory] = useState(false);
    const [selectCategory, setSelectCategory] = useState(null);

    const hanleCategoryClick = (category) =>{
        setSelectCategory(category)
    };

    const categoriesHtml = categories.map (category =>{
        return(
            <article className="categories-list-element" key={category._id0} onClick={()=>hanleCategoryClick(category)}>
                <h3>{category.name}</h3>
                {/* <p>{category.description}</p> */}
            </article>
        )
    })
    return (
        <>
        {creatingCategory ?
            <Modal onClose={()=>setCreatingCategory(false)}>
               <CreateCategory onCreate={()=>setCreatingCategory(false)}/>
           </Modal>
           :
           <button onClick={()=>setCreatingCategory(true)}>Nueva Categoria</button>
       }
            
        <section className="categories-list">
            {categoriesHtml}
        </section>

        {selectCategory && 
            <Modal onClose={()=>setSelectCategory(null)}>
                <h2>{selectCategory.name}</h2>
                <p>{selectCategory.description}</p>
            </Modal>
        }
        </>
)}

export default CategoriesList