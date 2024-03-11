import { PostListContext } from "../store/post-list-store"
import Post from "./Post"

import { useContext } from "react"



const PostList = () => {


  const postListContextObj=useContext(PostListContext)
  const postList=postListContextObj.postList
  console.log(postList)

  return (

    <div>
    {  postList.map((post)=><Post key={post.id} post={post}/>)}
    </div>



  )
}
export default PostList