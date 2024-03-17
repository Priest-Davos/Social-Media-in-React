import { PostListContext } from "../store/post-list-store"
import Post from "./Post"

import { useContext, useEffect, useState } from "react"
import WelcumMsg from "./WelcumMsg"
import LoadingSpinner from "./LoadingSpinner"


const PostList = () => {


  const postListContextObj = useContext(PostListContext)
  const postList = postListContextObj.postList
  // const addInitialPosts = postListContextObj.addInitialPosts//no need
  const fetching=postListContextObj.fetching
// console.log(fetching)
  //fetch data once without using  buttopn as  previously was fetching poost when btn clicked
  // const [isDataFetched,setIsDataFetched]=useState(false)
  // if(!isDataFetched){
  //   fetch("https://dummyjson.com/posts")
  //   .then(res => res.json())

  //   .then( (data) =>{ addInitialPosts(data.posts)})

  //   setIsDataFetched(true)
  // }//but not recommended  so use useEffectHook




  //no need of it  so can remove
  const handleGetPostClick = () => {
    // console.log("clicked")
    // fetch("https://dummyjson.com/posts")
    // .then(res => res.json())

    // .then( (data) =>{ addInitialPosts(data.posts)})

  }




  return (

    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length == 0 && <WelcumMsg onGetPostClick={handleGetPostClick} />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>



  )
}
export default PostList