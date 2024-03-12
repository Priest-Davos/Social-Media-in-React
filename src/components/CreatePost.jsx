const CreatePost=()=>{
  return(
    <form className="create-post">
    <div className="mb-3">
    <label for="userId" className="form-label">User ID</label>
    <input type="text" className="form-control" id="userId" placeholder="Enter your User ID here" ></input>
   
  </div>
  <div className="mb-3">
    <label for="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder="How are you feeling today..." ></input>
   
  </div>
  <div className="mb-3">
    <label for="body" className="form-label">Post Content</label>
    <textarea type="text"  rows="3" className="form-control" id="body" placeholder="Enter the post message here" ></textarea>
   
  </div>
 
  <div className="mb-3">
    <label for="reactions" className="form-label">Number of reactions</label>
    <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" ></input>
   
  </div>
  <div className="mb-3">
  <label for="tags" className="form-label">Enter your hashtags here</label>
  <input type="text" className="form-control" id="tags" placeholder="Please separate multiple tags by space" ></input>
 
</div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}
export default CreatePost