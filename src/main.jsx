import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'


const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children:[
        {path:"/",element:<PostList/>},
        {path:"/create-post" ,element:<CreatePost/>},
       
        {path:"demo1",element:"demo"},
        {path:"demo2",element:"demo2"},
      ]

    }
   
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={routes} />

  </React.StrictMode>,
)
