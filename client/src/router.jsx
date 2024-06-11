import {createBrowserRouter, redirect} from "react-router-dom";

import { getCategories } from "./utils/fetch";
import { getUsers } from "./utils/fetch";
import { getGroups } from "./utils/fetch";
import { getGroup } from "./utils/fetch";
import {getVotesByGroup} from "./utils/fetch";
import {getVotes} from "./utils/fetch";

import Register from "./pages/register/Register";
import ErrorPage from "./pages/ErrorPage";

import Root from "./pages/Root";

import CategoriesList from "./pages/Category/CategoriesList";
import UserList from "./pages/User/UserLIst";
import GroupList from "./pages/Group/GroupList";
import Group from "./pages/Group/Group";
import VoteList from "./pages/Vote/VoteList";
import Vote from "./pages/Vote/Vote";


async function fetchCategories(){
  const result = await getCategories();
  if(result.error){
    return redirect ("/register")
  }
  return result.data;
}

async function fetchUsers(){
  const result = await getUsers();
  if(result.error){
    return redirect ("/register")
  }
  return result.data;
}

async function fetchGroups(){
  const result = await getGroups();
  if(result.error){
    return redirect ("/register")
  }
  return result.data;
}

async function fetchGroup(id){
  try {
  const group = await getGroup(id);
  const categories = await getCategories();
  const votes = await getVotesByGroup(id);
  const result = {data: {...group.data, categories: categories.data, votes: votes.data}}
  console.log(result)
  /* if(result.error){
    return redirect ("/groups")
  } */
  return result.data;
}catch (error) {
  console.error(error);
  return redirect ("/groups")
}
}

async function fetchVotes(){
  const result = await getVotes();
  if(result.error){
    return redirect ("/groups")
  }
  return result.data;
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <div>TOXIC!</div>,
        },
        {
          path: "/categories",
          element: <CategoriesList />,
          loader: () => fetchCategories()
        },
        {
          path: "/users",
          element: <UserList />,
          loader: () => fetchUsers()
        },  
        {
          path: "/groups",
          element: <GroupList />,
          loader: () => fetchGroups()
        },    
        {
          path: "/groups/:id",
          element: <Group />,
          loader: ({params}) => fetchGroup(params.id) 
        },
        {
          path: "/votes",
          element: <VoteList />,
          loader: () => fetchVotes()
        },
        {
          path: "/vote/:id",
          element: <Vote />,
          loader: ({params}) => fetchVotes(params.id)
        },            
      ]
    },

    {
        path: "/register",
        element: <Register />
    },  
  
  ]);

  export default router