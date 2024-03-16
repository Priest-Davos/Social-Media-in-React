import { PostListContext } from "../store/post-list-store"
import Post from "./Post"

import { useContext, useEffect, useState } from "react"
import WelcumMsg from "./WelcumMsg"
import LoadingSpinner from "./LoadingSpinner"


const PostList = () => {


  const postListContextObj = useContext(PostListContext)
  const postList = postListContextObj.postList
  const addInitialPosts = postListContextObj.addInitialPosts


  //fetch data once without using  buttopn as  previously was fetching poost when btn clicked
  // const [isDataFetched,setIsDataFetched]=useState(false)
  // if(!isDataFetched){
  //   fetch("https://dummyjson.com/posts")
  //   .then(res => res.json())

  //   .then( (data) =>{ addInitialPosts(data.posts)})

  //   setIsDataFetched(true)
  // }//but not recommended  so use useEffectHook

  //creating a useState for Loading Spinner
  const [fetching, setFetching] = useState(false)


  useEffect(() => {
    
  const controller = new AbortController();
  const signal = controller.signal;
    setFetching(true)
    fetch("https://dummyjson.com/posts", { signal }).then(res => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false)
      }
      )

    return () => {

      console.log("useEffect Cleanup")
      controller.abort()
    }
  }, [])



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