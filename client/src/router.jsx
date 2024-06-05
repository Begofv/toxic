import {createBrowserRouter, redirect} from "react-router-dom";
import { getCategories } from "./utils/fetch";
import { getUsers } from "./utils/fetch";
import { getGroups } from "./utils/fetch";

import Register from "./pages/register/Register";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import CategoriesList from "./pages/Category/CategoriesList";
import UserList from "./pages/User/UserLIst";
import GroupList from "./pages/Group/GroupList";

async function fetchCategories(){
  const result = await getCategories();
  if(result.error){
    return redirect ("/register")
  }
  return result.data;
}

async function fetchUsers(){
  const result = await getUsers();
  return result.data;
}

async function fetchGroups(){
  const result = await getGroups();
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
      ]
    },

    {
        path: "/register",
        element: <Register />
    },  
  
  ]);

  export default router