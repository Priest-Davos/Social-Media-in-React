import { createContext, useReducer, useRef,useEffect,useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => { },
  // addInitialPosts: () => { },// no need
  fetching: false,
  deletePost: () => { },
});//create context for PostList



const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList
  if (action.type == "DEL") {
    let delPostId = action.payload.id

    newPostList = currentPostList.filter(post => post.id != delPostId);
    
  }

  else if (action.type === "ADD_INITIAL_POSTS") {
    // console.log(action.payload.posts_30)
    newPostList = action.payload.posts_30;
  }
  else if (action.type === "ADD") {
    // console.log(action.payload)
    newPostList = [action.payload.post, ...currentPostList ]
  }

  return newPostList

}

//create a component PostListProvider which will take all declared comonent in app.jsx and render it from here 
// as they all will get the value prop
const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, [])


  //  called it in createPost component with thes value so accept these value as argument here
  const addPost = (post) => {
    // console.log(post)
    const addPostObj = {
      type: "ADD",
      payload: {
       post
      }
    }
    dispatchPostList(addPostObj)
  }

  //this meth will take 30 posts as argument and call dispatchPostList with obj
  //call it in postListcomponent with posts_30 as parameter
  const addInitialPosts = (posts_30) => {
    // console.log(posts_30)
    const initialPostObj = {
      type: "ADD_INITIAL_POSTS",
      payload: { posts_30: posts_30, }
    }
    dispatchPostList(initialPostObj)
  }

  const deletePost = (id) => {
    const deleteActionObj = {
      type: "DEL",
      payload: {
        id: id,
      },
    }
    dispatchPostList(deleteActionObj)
    // console.log(`post ->${id} should be deleted`)
  }


    //creating a useState for Loading Spinner
    const [fetching, setFetching] = useState(false)

    useEffect(() => {  
    const controller = new AbortController();
    const signal = controller.signal;
      setFetching(true)
      fetch("https://dummyjson.com/posts", { signal })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");}
        return res.json()
      })
        .then((data) => {
          addInitialPosts(data.posts);
          setFetching(false)
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setFetching(false); // Update fetching state to indicate fetch failure
        });
  
      return () => {
  
        console.log("useEffect Cleanup")
        controller.abort()
      }
    }, [])
    //..................................................
  

  return (
    <PostListContext.Provider value={
      {
        postList: postList,
        addPost: addPost,
        // addInitialPosts,//will call it in PostList component
        fetching:fetching,
        deletePost: deletePost,
      }
    }>
      {children}
    </PostListContext.Provider>
  )
}

export default PostListProvider



// ignore below

    // old addpost method
  // const addPost = (userId, postTitle, postBody, reactions, tags) => {
  //   // console.log(`${userId},${postTitle},${postBody},${reactions},${tags}`)
  //   const addPostObj = {
  //     type: "ADD",
  //     payload: {
  //       id: Date.now(), userId, postTitle, postBody, reactions, tags,//same name so..
  //     }
  //   }
  //   dispatchPostList(addPostObj)
  // }



  // old
  // else if (action.type === "ADD") {
  //   newPostList = [{
  //     id: action.payload.id,
  //     title: action.payload.postTitle,
  //     body: action.payload.postBody,
  //     reactions: action.payload.reactions,
  //     userId: action.payload.userId,
  //     tags: action.payload.tags,
  //   }, ...currentPostList,
  //   ]
         //   // console.log(currentPostList)
  // }
