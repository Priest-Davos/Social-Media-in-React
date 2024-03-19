//in post-list-store.jsx comment  out the Controller.abort() since in strictMode  fetch state not functioning expected due to it
import { useState } from 'react'
import './App.css'
import CreatePost from '../components/CreatePost'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Post from '../components/Post'
import PostList from '../components/PostList'
import Sidebar from '../components/Sidebar'
import PostListProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {

  // const [selectedTab, setSelectedTab] = useState("")

  //in post-list-store.jsx comment  out the Controller.abort() since in strictMode  fetch state not functioning expected due to it

  return (

    //pass every comp as children in postListProviedr component
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className='content'>
          <Header></Header>

         {// {selectedTab == "Home" ? <PostList /> : selectedTab == "Create Post" ? <CreatePost /> : null}
}
<Outlet/>

          <Footer />
        </div>

      </div>
    </PostListProvider>

  )
}
export default App
