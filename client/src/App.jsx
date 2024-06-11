import { useState, useEffect } from 'react'
import Category from './pages/Category/Category'
import CategoriesList from './pages/Category/CategoriesList'
import UsersList from './pages/User/UserLIst'
import GroupList from './pages/Group/GroupList'
import Register from './pages/register/Register'
import { getCategories } from './utils/fetch'
import { getUsers } from './utils/fetch'
import { getGroups } from './utils/fetch'
import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories,setCategories] = useState([]);
  const [users,setUsers] = useState([]);
  const [groups,setGroups] = useState([]);
  useEffect(()=>{
    fetchCategories();
    fetchUsers();
    fetchGroups();
  },[]);
  async function fetchCategories(){
    const result = await getCategories();
    console.log("categories",result);
    setCategories(result.data);
  }
  async function fetchUsers(){
    const result = await getUsers();
    console.log("users",result);
    setUsers(result.data);
  }
  async function fetchGroups(){
    const result = await getGroups();
    console.log("grupos",result);
    setGroups(result.data);
  }
  return (
    <>
      {!isLoggedIn ?
        <Register onLogin={() => setIsLoggedIn(true)}/>
        :
         <di>
          <CategoriesList categories={categories}/>
          <GroupList groups={groups}/>
          <UsersList users={users}/>
        </di>
      }
    </>
  )
}

export default App
