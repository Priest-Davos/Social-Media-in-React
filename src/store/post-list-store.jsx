import { createContext, useReducer, useRef } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});//create context for PostList



const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList
  if (action.type == "DEL") {
    let delPostId = action.payload.id

    newPostList = currentPostList.filter(post => post.id != delPostId)
    console.log(newPostList)
    // console.log((delPostId in currentPostList.id))
    // console.log("yes")
  }
else if(action.type==="ADD"){
  newPostList=[  {
    id: action.payload.id,
    title: action.payload.postTitle,
    body: action.payload.postBody,
    reactions: action.payload.reactions,
    userId: action.payload.userId,
    tags: action.payload.tags,
  },...currentPostList,
  ]
}

  return newPostList

}

//create a component PostListProvider which will take all declared comonent in app.jsx and render it from here 
// as they all will get the value prop
const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, [])


  //  called it in createPost component with thes value so accept these value as argument here
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId},${postTitle},${postBody},${reactions},${tags}`)
    const addPostObj = {
      type: "ADD",
      payload: {
        id:Date.now(),userId, postTitle, postBody, reactions, tags,//same name so..
      }
    }
    dispatchPostList(addPostObj)
  }

  const deletePost = (id) => {
    const deleteActionObj = {
      type: "DEL",
      payload: {
        id: id,
      },
    }
    dispatchPostList(deleteActionObj)
    console.log(`post ->${id} should be deleted`)
  }

  return (
    <PostListContext.Provider value={
      {
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }
    }>
      {children}
    </PostListContext.Provider>
  )
}

export default PostListProvider
