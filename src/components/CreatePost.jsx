import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {

 
  const { addPost } = useContext(PostListContext)//call it in onSubmit

  //create the useRef state and pass each to their respective ref attribute of inputField
  // else had to create onChange listener and maintain a state for each input
  const userIdReference = useRef();
  const postTitleReference = useRef()
  const postBodyReference = useRef();
  const reactionsReference = useRef();
  const tagsReference = useRef()


  //call it in onSubmit listener of form
  const handleSubmit = (event) => {
    event.preventDefault()
    const userId = userIdReference.current.value;
    const postTitle = postTitleReference.current.value;
    const postBody = postBodyReference.current.value;
    const reactions = reactionsReference.current.value;
    const tags = (tagsReference.current.value).split(" ");
    // console.log(tags)

    // After accessing and assigning the value , setting the field empty
    userIdReference.current.value = ""
    postTitleReference.current.value = ""
    postBodyReference.current.value = ""
    reactionsReference.current.value = ""
    tagsReference.current.value = ""

 //call it so that it will get all the field values
    addPost(userId, postTitle, postBody, reactions, tags)
  }

  return (
    <form className="create-post" onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input type="text" ref={userIdReference} className="form-control" id="userId" placeholder="Enter your User ID here" ></input>

      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" ref={postTitleReference} className="form-control" id="title" placeholder="How are you feeling today..." ></input>

      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea type="text" ref={postBodyReference} rows="3" className="form-control" id="body" placeholder="Enter the post message here" ></textarea>

      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text" ref={reactionsReference} className="form-control" id="reactions" placeholder="How many people reacted to this post" ></input>

      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
        <input type="text" ref={tagsReference} className="form-control" id="tags" placeholder="Please separate multiple tags by space" ></input>

      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}
export default CreatePost