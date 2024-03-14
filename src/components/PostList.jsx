import { PostListContext } from "../store/post-list-store"
import Post from "./Post"

import { useContext } from "react"
import WelcumMsg from "./WelcumMsg"


const PostList = () => {


  const postListContextObj=useContext(PostListContext)
  const postList=postListContextObj.postList
  const addInitialPosts=postListContextObj.addInitialPosts
  // console.log(postList)

  

const handleGetPostClick=()=>{
  console.log("clicked")
  fetch("https://dummyjson.com/posts")
  .then(res => res.json())

  .then( (data) =>{ addInitialPosts(data.posts)})

}



  return (

    <div>
    {postList.length==0 && <WelcumMsg  onGetPostClick={handleGetPostClick}/>}
    {  postList.map((post)=><Post key={post.id} post={post}/>)}
    </div>



  )
}
export default PostList