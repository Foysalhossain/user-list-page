import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserListPage from './Components/UserListPage/UserListPage.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserListPage />
  },
  {
    path: "/userDetails/:id",
    element: <UserDetails />,
    loader: ({params}) => fetch(`https://dummyjson.com/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
