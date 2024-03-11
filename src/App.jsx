
import { useState } from 'react'
import './App.css'
import CreatePost from './components/CreatePost'
import Footer from './components/Footer'
import Header from './components/Header'
import Post from './components/Post'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'
import PostListProvider from './store/post-list-store'

function App(){

const [selectedTab,setSelectedTab]=useState("Home")


  return(
     
    //pass every comp as children in postListProviedr component
    <PostListProvider>
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <div  className='content'>
    <Header></Header>
    
    {selectedTab=="Home"  ?  <PostList/>  : selectedTab=="Create Post" ?<CreatePost/>:null }
  
   
   
    <Footer/>
    </div>
    
    </div>
    </PostListProvider>

  )
}
export default App
