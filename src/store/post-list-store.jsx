import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});//create context for PostList


const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Card B ",
    body: "Looking like a wow, so elligant,so sweet",
    reactions:69,
    userId:'u-9',
    tags:["#gorgeous", "#sweet", "#wow"],
  },
  {
    id: "2",
    title: "Card 2",
    body: "content 2",
    reactions:89,
    userId:'u-3',
    tags:["none"],
  },

  {
    id: "3",
    title: "Card 3",
    body: "content 3",
    reactions:7,
    userId:'u-9',
    tags:["content"],
  },



]


const postListReducer = (currentPostList, action) => {
  let newPostList

  return newPostList

}

//create a component PostListProvider which will take all declared comonent in app.jsx and render it from here 
// as they all will get the value prop
const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)
  const addPost = () => {

  }
  const deletePost = () => {

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
