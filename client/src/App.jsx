import { useState, useEffect } from 'react'
import Category from './pages/Category/Category'
import CategoriesList from './pages/Category/CategoriesList'
import Register from './components/register/Register'
import { getCategories } from './utils/fetch'
import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
    fetchCategories();
  },[]);
  async function fetchCategories(){
    const result = await getCategories();
    console.log("categories",result);
    setCategories(result.data);
  }

  return (
    <>
      {!isLoggedIn ?
        <Register onLogin={() => setIsLoggedIn(true)}/>
        :
          <CategoriesList categories={categories}/>
      }
    </>
  )
}

export default App
